import express from "express"

const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
    app.listen(port,()=> console.log("server is running on",port))
} catch (error) {
    console.log(error);
}