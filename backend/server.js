const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const projects = [
  {
    title: "Cloud Forms",
    description:
      "Cloudforms is a web-based legal application used in the UK that is based on React and AWS serverless technologies. This application is primarily utilized by solicitors and barristers from top legal firms in the UK. Laserforms (LFM) is a repository for all types of forms that one can submit in order to be eligible for goverment funds.",
    technologies: ["React.js", "AWS", "Node.js"],
  },
  {
    title: "Portfolio",
    description: "Personal portfolio showcasing my projects.",
    technologies: ["React.js", "Node.js"],
  }
];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
