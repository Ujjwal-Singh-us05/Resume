const {Router} = require("express");
const User = require("../models/users");
const {createUser, skills, projects, contact, about} = require("../controller/UserController");

const router = Router();


router.get("/skills/:id",skills);

//router.get("/about/:id", about);
router.get("/projects/:id", projects);
router.get("/contact/:id", contact);

router.post("/createUser", createUser);


module.exports = router;