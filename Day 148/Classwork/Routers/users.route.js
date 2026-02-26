const express = require(`express`);
const usersRouter = express.Router();

const users = [
    { id: 1, name: `Giorgi`, age:15 },
    { id: 2, name: `Nika`, age:20 },
    { id: 3, name: `Saba`, age:30 }
];

usersRouter.get(`/`, (req, res) => {
    res.json(users);
});

usersRouter.get(`/:id`), (req, res) => {
    const id  = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: `User not found `});
    }
};

module.exports = usersRouter;