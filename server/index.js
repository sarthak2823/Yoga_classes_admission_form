const express = require("express");
const app = express();
const port = 3001;

app.use(express.urlencoded())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to App's Backend");
});

app.post("/register", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const mobile = req.body.mobile;
  const email = req.body.email;
  const gender = req.body.gender;
  const batch = req.body.batch;

  if (!name || !age || !mobile || !email || !gender || !batch)
    return res.send("All fields are required");

  const data = { name, age, mobile, email, gender, batch };
  console.log(data);

  res.send("register");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
