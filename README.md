# Resume
Working link of this project: https://resume-89gp.onrender.com
Resume link: https://drive.google.com/file/d/12monoqmjdzLgiYOvVJppN2noo086ilO4/view?usp=sharing
Architecture
  Frontend:
  EJS templates with Bootstrap for styling.
  Conditional rendering for authenticated users.
  Backend:
  Node.js with Express.js as the web framework.
  REST APIs for authentication, blog CRU operatoins.
  Database:
  MongoDB with Mongoose Atlas.

Local Setup
  Clone the repository:
    git clone <your-repo-url>
    cd <repo-folder>
  Install dependencies:
    npm install
  Create a .env file:
    MONGO_URL=mongodb://localhost:27017/portfolio_blog
  Run the server:
    npm start or npm run dev
App will be available at http://localhost:8001

Schema
  {
    "_id": "ObjectId",
    "fullName": "John Doe",
    "email": "john@example.com",
    "about": "Full-stack developer passionate about MERN stack",
    "contact": "+91-9876543210",
    "linkedin": "https://linkedin.com/in/johndoe",
    "github": "https://github.com/johndoe",
    "leetcode": "https://leetcode.com/johndoe",
    "address": "New Delhi, India",
    "education": [
      {
        "degree": "B.Tech in Computer Science",
        "institution": "XYZ University",
        "year": "2024"
      }
    ],
    "skills": ["Node.js", "Express", "MongoDB", "React"],
    "projects": [
      {
        "title": "Blogging App",
        "description": "A full-stack blogging platform with CRUD features",
        "techStack": ["Node.js", "Express", "MongoDB", "EJS"],
        "githubLink": "https://github.com/johndoe/blog-app",
        "liveDemo": "https://blogapp.onrender.com"
      }
    ]
  }
