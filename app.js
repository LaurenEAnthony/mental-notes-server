require("dotenv").config();
let express = require("express");
let app = express();
let sequelize = require("./db");

// CONTROLLERS
let user = require("./controllers/user-controller");
let note = require("./controllers/note-controller");

sequelize.sync();
// sequelize.sync({force: true})

app.use(express.json());
app.use(require("./middleware/headers"));

// ROUTES
// Unprotected
app.use("/user", user);
// Protected
app.use(require("./middleware/validate-session"));
app.use("/notes", note);

app.listen(process.env.PORT, function () {
  console.log("App is listening on port 3000");
});
