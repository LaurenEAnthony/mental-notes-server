const Sequelize = require("sequelize");
const sequelize = new Sequelize("mental-notes-server", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.authenticate().then(
  function () {
    console.log("connected to Mental notes DB");
  },
  function (err) {
    console.log(err);
  }
);

module.exports = sequelize;
