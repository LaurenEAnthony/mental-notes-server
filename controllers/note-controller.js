let express = require("express");
let router = express.Router();
const Notes = require("../db").import("../models/notes");

// Create Notes
router.post("/create", function (req, res) {
  const noteCreate = {
    owner: req.user.id,
    date: req.body.note.date,
    time: req.body.note.time,
    type: req.body.note.type,
    details: req.body.note.details,
    thoughts: req.body.note.thoughts,
    emotion1: req.body.note.emotion1,
    // timing1: req.body.note.timing1,
    intensity1: req.body.note.intensity1,
    emotion2: req.body.note.emotion2,
    // timing2: req.body.note.timing2,
    intensity2: req.body.note.intensity2,
    emotion3: req.body.note.emotion3,
    // timing3: req.body.note.timing3,
    intensity3: req.body.note.intensity3,
    skillType: req.body.note.skillType,
    skillDetail: req.body.note.skillDetail,
    skillHelpful: req.body.note.skillHelpful,
    active: req.body.note.active,
  };
  Notes.create(noteCreate)
    .then((notes) => res.status(200).json(notes))
    .catch((err) => res.status(500).json({ error: err }));
});

// Update Note
router.put("/update/:id", function (req, res) {
  const updateNote = {
    owner: req.user.id,
    date: req.body.note.date,
    time: req.body.note.time,
    type: req.body.note.type,
    details: req.body.note.details,
    thoughts: req.body.note.thoughts,
    emotion1: req.body.note.emotion1,
    // timing1: req.body.note.timing1,
    intensity1: req.body.note.intensity1,
    emotion2: req.body.note.emotion2,
    // timing2: req.body.note.timing2,
    intensity2: req.body.note.intensity2,
    emotion3: req.body.note.emotion3,
    // timing3: req.body.note.timing3,
    intensity3: req.body.note.intensity3,
    skillType: req.body.note.skillType,
    skillDetail: req.body.note.skillDetail,
    skillHelpful: req.body.note.skillHelpful,
    active: req.body.note.active,
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
  let userid = req.user.id;
  Notes.findAll({
    where: { active: true, owner: userid },
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
