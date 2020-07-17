const db = require("../../db-config");

module.exports = {
    findByProjectId,
    findById,
};

function findByProjectId(id) {
    // retrieving a list of projects.
    return db
        .select(
            "p.id",
            "p.name as ProjectName",
            "t.id as taskStepNumber",
            "t.descriptions"
        )
        .from("project as p")
        .join("tasks as t", "t.project_id", "=", "p.id")
        .where({ "p.id": id });
}

function findById(id) {
    return db("project").where("id", id).first();
}

