const express=require('express')
const bodyParser=require('body-parser')
const cors= require('cors')
const mongoose =require('mongoose')
const app=express();
const port =5000;
app.use(cors())
mongoose.connect('mongodb+srv://vaani:vaani@cluster0.w1oeafk.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))