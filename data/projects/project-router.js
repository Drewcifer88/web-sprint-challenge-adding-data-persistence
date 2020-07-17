const express = require("express");

const Projects = require("./project-model");
const Resources = require("./resource-model");
const Tasks = require("./tasks-model");

const router = express.Router();

router.get("/:id/detail", (req, res) => {
    // retrieving a list of resources.
    const { id } = req.params;
    Tasks.findByTaskId(id)
        .then((Projects) => {
            res.json(Projects);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get a list of Tasks" });
        });
});

router.get("/:id/project", (req, res) => {
    // retrieving a list of resources.
    const { id } = req.params;
    Projects.findById(id)
        .then((Projects) => {
            res.json(Projects);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get Projects" });
        });
});

router.get("/:id/resources", (req, res) => {
    // retrieving a list of resources.
    const { id } = req.params;
    Resources.findByResourcesId(id)
        .then((resource) => {
            res.json(resource);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get resources" });
        });
});

router.get("/:id/tasks/project", (req, res) => {
    // retrieving a list of resources.
    const { id } = req.params;
    Projects.findByProjectId(id)
        .then((Projects) => {
            res.json(Projects);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get Projects" });
        });
});

module.exports = router;