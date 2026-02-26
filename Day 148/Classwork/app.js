const express  = require(`express`);
const app = express();
const usersRouter = require(`./Routers/users.route`);

app.use(`/users`, usersRouter);

app.listen(3000, () => {
    console.log("server is running");
});