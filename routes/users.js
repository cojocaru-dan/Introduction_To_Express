const express = require("express");

const secondRouter = express.Router();

secondRouter.get("/users", (req, res) => {
    res.send("Response from Second Router");
});

secondRouter.get("/users/:id", (req, res) => {
    res.send(`Hello ${req.params.id}!`);
})

// router.get("/new", (req, res) => {
//     res.send("Users new list");
// });

// router.post("/", (req, res) => {
//     res.send("Post method");
// });

// router.get("/:userId", (req, res) => {
//     res.send(`Get User With ID ${req.params.userId}`);
// });

// // if i put lines 8-10 here, it will run line 16 and take "new" as userId (wrong result)

// router.put("/:userId", (req, res) => {
//     res.send(`Update User With ID ${req.params.userId}`);
// });

// router.delete("/:userId", (req, res) => {
//     res.send(`Delete User With ID ${req.params.userId}`);
// });

// if i want multiple operations on the same route (route "/:userId") (lines 16-28 - 3 operations (get, put, delete))
// router.route("/:userId")
//     .get((req, res) => {
//         res.send(`Get User With ID ${req.params.userId}`);
//     })
//     .put((req, res) => {
//         res.send(`Update User With ID ${req.params.userId}`);
//     })
//     .delete((req, res) => {
//         res.send(`Delete User With ID ${req.params.userId}`);
//     });

module.exports = secondRouter;