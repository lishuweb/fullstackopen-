const mongoose = require("mongoose");

if (process.argv.length < 3) {
    console.log("Give password as argument");
    process.exit(1);
}

const password = process.argv[2];
const url = process.env.MONGODB_URI;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 5) 
{
    const newName = process.argv[3];
    const newNumber = process.argv[4];

    const newPerson = new Person({
        name: newName,
        number: newNumber
    });

    newPerson.save().then((savedData) => {
        console.log(savedData, "hello");
        console.log(
            `added ${savedData.name} number ${savedData.number} to phonebook`
        );
        mongoose.connection.close();
    });
}
else
{
    Person.find({}).then(persons => {
        console.log("phonebook:");
        persons.forEach(data => {
            console.log(`${data.name} ${data.number}`);
        });
        mongoose.connection.close();
    });
}   