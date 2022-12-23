const express = require("express");
const app = express();
const PORT = 4000;

//array representing the data
const database = [];

//generate random string id
const generateID = () => Math.random().toString(36).substring(2, 10);

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// http get api to get user data in string format.
app.get("/api",(req, res) => {
    res.json({
        message: "hello world",
    });
});


//http post to store user data
app.post("/register", (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body);
    
    //check if user exist
    let result = database.filter(
        (user) => user.email === email || user.username === username
    );

    //creates the user's data structure on the server
    if (result.length === 0) {
        database.push({
            id: generateID(),
            username,
            password,
            email,
            timezone: {},
            schedule:[],
        });
        return res.json({ message: "Account created succesfully!" });
    }
    res.json({ error_message: "User already exists!" });
});

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
})