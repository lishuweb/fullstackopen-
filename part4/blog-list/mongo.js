const mongoose = require("mongoose");
require('dotenv').config();

if (process.argv.length < 3) 
{
    console.log("Give password as argument");
    process.exit(1);
}

const password = process.argv[2];
const url = process.env.MONGODB_URL;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
});

const Blog = mongoose.model("Blog", blogSchema);

if (process.argv.length === 7) 
{
    const newTitle = process.argv[4];
    const newAuthor = process.argv[5];
    const newUrl = process.argv[6];
    const newLikes = process.argv[7];

    const newBlog = new Blog({
        title: newTitle,
        author: newAuthor,
        url: newUrl,
        likes: newLikes
    });

    newBlog.save().then((savedData) => {
        console.log(savedData, "hello");
        console.log(
            `added ${savedData.title} ${savedData.author} ${savedData.url} ${savedData.likes} to Blog`
        );
        mongoose.connection.close();
    });
}
else
{
    Blog.find({}).then(persons => {
        console.log("blog:");
        persons.forEach(data => {
            console.log(`${data.title} ${data.author} ${data.url} ${data.likes}`);
        });
        mongoose.connection.close();
    });
}   