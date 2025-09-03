
const {Schema, model} = require("mongoose");

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  skills: [String], 

});

const UserSchema = new Schema ({
    fullName: {
        type : String,
        required: true,
    },
    email: {
        type : String,
        required: true,
        unique: true,
    },
    about: {
        type: String
    },
    contact: {
        type: String
    },
    linkedin: {
        type: String,
    },
    github: {
        type: String,
    },
    leetcode: {
        type: String,
    },
    address: {
        type: String,
    },
    education: {
        type: Array,
    },
    skills: {
        type: Array,
    },
    projects: [projectSchema],
    profileImageUrl: {
        type: String,
        default: "/images/default.png",
    },
    
}, 
{timestamps: true}
);





const User = model("User", UserSchema);

module.exports = User;