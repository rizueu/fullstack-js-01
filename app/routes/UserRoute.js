const router = require("express").Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUser,
} = require("../controllers/UserController");

router.get("/:id", getUser);
router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
