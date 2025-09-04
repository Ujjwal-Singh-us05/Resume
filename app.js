require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000;
const User = require("./models/users");

const userRoute = require("./routes/user");




mongoose
.connect(process.env.MONGO_URL)
.then((e) => console.log("MongoDB connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve('./public')));

app.use("/user", userRoute);



app.get("/health", async (req, res) =>{
    return res.status(200);
})

app.get("/", async (req, res)=>{
    const user = await User.findOne({email:"ujjwalsingh.us05@gmail.com"});
    res.render("home",{
        user
    });
});



app.listen(PORT, ()=> console.log(`Server Started at port: ${PORT}`));