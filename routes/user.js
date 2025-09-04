const {Router} = require("express");
const User = require("../models/users");
const {createUser, skills, projects, contact, about, addskill} = require("../controller/UserController");

const router = Router();


router.get("/skills/:id",skills);

//router.get("/about/:id", about);
router.get("/projects/:id", projects);
router.get("/contact/:id", contact);

router.post("/createUser", createUser);
router.get("/addskill/:id", async (req, res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    res.render("addskill",{
        user
    })
})
router.post("/createSkill/:id",addskill);


module.exports = router;