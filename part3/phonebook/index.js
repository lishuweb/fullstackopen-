const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
require('dotenv').config();
const Person = require('./models/phonebook')

app.use(express.json());
app.use(cors());
app.use(express.static('build'));

morgan.token("body", (req) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

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
    const data = request.body;
    if(!data)
    {
        response.json(
        {
            error: 'name or number is missing',
        }
        ).status(400)
    }
    const personData = Person.findOne({ name: data.name})
                        .then((result) => {
                           return response;
                        });
    if(personData)
    {
        response.json(
            {
                error: 'name must be unique'
            }
        ).status(400)
    }
    else 
    {
        const newData = {
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
});
        
app.put('/api/persons/:id', (request, response, next) => {
    console.log(request,"requset")
    const id = Number(request.params.id);
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

app.delete('/api/persons/:id', (request, response, next) => {
    const personId =(request.params.id);
    console.log(personId,"personid")
    Person.findByIdAndRemove(personId).then((result) => {
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