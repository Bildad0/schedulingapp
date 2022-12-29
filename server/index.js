import express, { urlencoded } from "express";
const app = express();
const PORT = 4000;

//array representing the data
const database = [];

//generate random string id
const generateID = () => Math.random().toString(36).substring(2, 10);

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use((res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
});

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
      schedule: [],
    });
    return res.json({
      message: "Account created succesfully!",
      data: {
        _id: result[0].id,
        _username: result[0].username,
        _email: result[0].email,
        _timezone: result[0].timezone,
      },
    });
  }
  res.json({ error_message: "User already exists!" });
});

//login user to the server
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  let result = database.filter(
    (user) => user.username == username && user.password == password
  );
  if (result.length !== 1) {
    return res.json({ error_message: "Incorrect credentials" });
  }
  res.json({
    message: "Login Successfully",
    data: {
      _id: result[0].id,
      _email: result[0].email,
    },
  });
});

//create schedules in the server
app.post("/schedule/create", (req, res) => {
  const { userId, timezone, schedule } = req.body;
  let result = database.filter((db) => db.id === userId);
  result[0].timezone = timezone;
  result[0].schedule = schedule;
  res.json({ message: "Ok" });
});

//getting schedules
app.get("/schedules/:id", (req, res) => {});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
