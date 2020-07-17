exports.seed = function (knex, Promise) {
  return knex("tasks")
    .truncate()
    .then(function () {
      return knex("tasks").insert([
        { project_id: 1, notes: "test", descriptions: "fork a sprint" },
        {
          project_id: 1, notes: "test",
          descriptions: "clone to your branch repo via terminal",
        },
        { project_id: 1, notes: "test", descriptions: "on a code editor, show your magic!" },
        { project_id: 2, notes: "test", descriptions: "clone your bw project" },
        {
          project_id: 2, notes: "test",
          descriptions: "communicate with your team-mate as much as you can",
        },
        { project_id: 2, notes: "test", descriptions: "on a code editor, show your magic!" },
      ]);
    });
};