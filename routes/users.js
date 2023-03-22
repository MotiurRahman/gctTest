var express = require("express");
const { ObjectId } = require("mongodb");

const User = require("../Model/UserModel");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const result = await User.find({});
    res.status(200).json({ status: true, data: result });
  } catch (err) {
    res.status(400).send({ status: false, err: err.message });
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const result = await User.findById(id);
    res.status(200).json({ status: true, data: result });
  } catch (err) {
    res.status(400).send({ status: false, err: err.message });
  }
});

/* POST users listing. */
router.post("/", async function (req, res, next) {
  try {
    const result = await User.create(req.body);
    res.status(200).send({ status: true, data: result });
  } catch (err) {
    res.status(400).send({ status: false, err: err.message });
  }
});

/* PUT users listing. */
router.put("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const update = req.body;
    const result = await User.updateOne(filter, update);
    res.status(200).send({ status: true, data: result });
  } catch (err) {
    res.status(400).send({ status: false, err: err.message });
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const result = await User.deleteOne({ _id: new ObjectId(id) });
    res.status(200).send({ status: true, data: result });
  } catch (err) {
    res.status(400).send({ status: false, err: err.message });
  }
});

module.exports = router;
