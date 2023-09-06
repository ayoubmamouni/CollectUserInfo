const express = require("express");

const app = express();

//setup view engine
app.set("view engine", "ejs");

//setup public folder
app.use(express.static(__dirname + "/public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.render("main");
});

// //handle 404 errors
app.use((req, res, next) => {
  return res.status(404).send("Page not found!");
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started at ${port}`));
