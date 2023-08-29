const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(express.static('build'));

morgan.token("body", (req) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

const url = process.env.MONGODB_URI;

mongoose.set('strictQuery', false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
    name: String,
    number: Number,
});

const Person = mongoose.model('Person', personSchema);

const generateId = () => Math.floor((Math.random() * 1000000) + 1);

app.get('/api/persons', (request, response, next) => {
    Person.find({}).then((result) => {
        response.json(result);
    })
    .catch((e) => {
        next(e);
    });
});

app.get('/info', (request, response, next) => {
    const len = Person.length;
    response.send(
            `
                <p>Phonebook has info for ${len} people</p>
                <p>${new Date()}</p>
            `
        )
        .catch((e) => {
            next(e);
        });
});

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then((result) => {
            if(result)
            {
                response.json(result).status(200);
            }
            else 
            {
                response.status(404).send(
                    `There is no person at ${request.params.id}`
                );
            }
        })
        .catch((e) => {
            next(e);
        })
});

app.post('/api/persons', (request, response, next) => {
    const id = generateId();

    const data = request.body.name;
    console.log(name, 'hello');
    Person.find({ name: data.name }).then((result) => {
        if(result)
        {
            response.json({
                error: 'name must be unique',
            }).status(400);
        }
        else 
        {
            if(!data.name && !data.number)
            {
                return response.json({
                    error: 'name or number is missing',
                }).status(400)
            }
            else 
            {
                const newData = {
                    id, 
                    name: data.name, 
                    number: data.number
                };
                const newPerson = new Person(newData);
                newPerson.save().then((val) => {
                    response.json(val).status(201);
                })
                .catch((e) => {
                    next(e);
                });
            }
        }
    })
});

app.put('/api/persons/:id', (request, response, next) => {
    const id = request.params.id;
    const data = request.body;

    Person.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
    })
        .then((updatedPerson) => {
            response.json(updatedPerson).status(200);
        })
        .catch((e) => {
            next(e);
        });
});

app.delete('api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).send(
                `${request.params.id} is deleted`
            )
        })
        .catch((error) => {
            next(error);
        });
});

app.use((request, response, next) => {
    response.status(404).send(
        'No code available to handle this request'
    );
});

const errorHandler = (error, request, response, next) => {
    console.log(error.message);
    if(error.name === 'CastError')
    {
        return response.status(400)
            .send({
                error: 'malformatted id'
                })
    }
    else if(error.name === 'ValidationError')
    {
        return response.status(400)
            .json({ 
                error: error.message 
            })
    }
    next(error);
};

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});