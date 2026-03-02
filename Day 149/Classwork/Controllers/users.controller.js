const users = [
    { id: 1, name: "Giorgi", age: 15},
    { id: 2, name: "Sandro", age: 20}
];

const getUsers = (req, res) => {
    res.status(200).json(users);
};

module.exports = {
    getUsers
};