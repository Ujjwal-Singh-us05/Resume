const User = require("../models/users");


const createUser = async (req, res) =>{
    try {
        const {fullName, email, about, contact, linkedin, github, address, education, skills, projects} = req.body;
        if(!fullName ||  !email){
            return res.send({message: "Please provide fullname and email"});
        }
        const user = await User.create({
            fullName, email, about, contact, linkedin, github, address, education, skills, projects
        })
        res.send({message: "user created!",user});

    } catch (error) {
        console.log(error);
    }
};

const skills = async (req, res) => {
    try {
        const {id} = req.params;

        const user = await User.findById({_id:id});
        res.render("skills",{
            user
        });
    } catch (error) {
        console.log(error);
    }
};

const projects = async (req, res) => {
    try {
        const {id} = req.params;
        const { skill } = req.query;
        const user = await User.findById(id);
        let projects = user.projects || [];

        if (skill) {
            const lowerSkill = skill.toLowerCase();

            projects = projects.filter(p =>
                Array.isArray(p.skills) &&
                p.skills.some(s => s.toLowerCase() === lowerSkill)
            );
        }

        res.render("projects",{
            user,
            projects,
            skill
        });
    } catch (error) {
        console.log(error);
    }
};

const contact = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById({_id:id});
        res.render("contact",{
            user
        });
    } catch (error) {
        console.log(error);
    }
};
const about = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById({_id:id});
        res.render("about",{
            user
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {createUser, skills, projects, contact, about}