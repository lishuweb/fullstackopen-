const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
    name: String,
    number: Number,
});

personSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

const Person = mongoose.model("Person", personSchema);

app.use(express.json());
app.use(cors());
app.use(express.static('build'));

morgan.token('body', (request, response) => {
    request.method === 'POST' ? JSON.stringify(request.body) : ''
});

app.use(
    morgan((tokens, request, response) =>
    [
        tokens.method(request, response),
        tokens.url(request, response),
        tokens.status(request, response),
        tokens.res(request, response, 'content-length'), 
        '-',
        tokens['response-time'](request, response), 
        'ms', 
        tokens.body(request, response),
    ].join(' ')
))


let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

const generateId = () => Math.floor((Math.random() * 1000000) + 1);

app.get("/api/persons", (request, response, next) => {
    Person.find({}).then((result) => {
        response.json(result);
    })
    .catch((e) => {
        next(e);
    });
});

app.get("/info", (request, response, next) => {
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

app.get("/api/persons/:id", (request, response, next) => {
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

app.post("/api/persons", (request, response, next) => {
    const id = generateId();

    const data = request.body.name;
    console.log(name, "hello");
    Person.find({ name: data.name }).then((result) => {
        if(result)
        {
            response.json({
                error: "name must be unique",
            }).status(400);
        }
        else 
        {
            if(!data.name && !data.number)
            {
                return response.json({
                    error: "name or number is missing",
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

app.put("/api/persons/:id", (request, response, next) => {
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

app.delete("api/persons/:id", (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
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
        "No code available to handle this request"
    );
});

const errorHandler = (error, request, response, next) => {
    console.log(error.message);
    if(error.name === 'CastError')
    {
        return response.status(400). send (
            {error: "malformatted id"}
        );
    }
    next(error);
};

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});