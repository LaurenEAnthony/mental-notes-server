let express = require("express");
let router = express.Router();
const Notes = require("../db").import("../models/notes");

// Create Notes
router.post("/create", function (req, res) {
  const noteCreate = {
    owner: req.user.id,
    date: req.body.notes.date,
    type: req.body.notes.type,
    details: req.body.notes.details,
    thoughts: req.body.notes.thoughts,
    emotion: req.body.notes.emotion,
    emotionTiming: req.body.notes.emotionTiming,
    skillType: req.body.notes.skillType,
    skillDetail: req.body.notes.skillDetail,
    skillHelpful: req.body.notes.skillHelpful,
    active: req.body.notes.active,
  };
  Notes.create(noteCreate)
    .then((notes) => res.status(200).json(notes))
    .catch((err) => res.status(500).json({ error: err }));
});

// Update Note
router.put("/update/:id", function (req, res) {
  const updateNote = {
    owner: req.user.id,
    date: req.body.notes.date,
    type: req.body.notes.type,
    details: req.body.notes.details,
    thoughts: req.body.notes.thoughts,
    emotion: req.body.notes.emotion,
    emotionTiming: req.body.notes.emotionTiming,
    skillType: req.body.notes.skillType,
    skillDetail: req.body.notes.skillDetail,
    skillHelpful: req.body.notes.skillHelpful,
    active: req.body.notes.active,
  };

  const query = { where: { id: req.params.id, owner: req.user.id } };

  Notes.update(updateNote, query)
    .then((notes) => res.status(200).json(notes))
    .catch((err) => res.status(500).json({ error: err }));
});

// Delete Note
router.delete("/delete/:id", function (req, res) {
  const query = { where: { id: req.params.id, owner: req.user.id } };

  Notes.destroy(query)
    .then(() => res.status(200).json({ message: "Note deleted" }))
    .catch((err) => res.status(500).json({ error: err }));
});

// Display Active Only
router.get("/display/default", function (req, res) {
  // let active = req.notes.active;
  Notes.findAll({
    where: { active: true },
  })
    .then((notes) => res.status(200).json(notes))
    .catch((err) => res.status(500).json({ error: err }));
});

// Display All
router.get("/display/all", function (req, res) {
  let userid = req.user.id;
  Notes.findAll({
    where: { owner: userid },
  })
    .then((notes) => res.status(200).json(notes))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
