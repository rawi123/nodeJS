const express = require('express');
const bodyParser = require('body-parser');
let users = [];
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.status(200).send({ users: users })
})
app.get("/:user_id", (req, res) => {

    const user = users.find(user => user.id === parseInt(req.params.user_id));
    if (user) {
        res.status(200).send(user)
    }
    else {
        res.status(404).send("Not found!")
    }
})

app.post("/", (req, res) => {

    if (users.find(user => user.id === req.body.id)) {
        return res.status(404).send("User alreday exists")
    }
    if (!Object.keys(req.body).length) {
        return res.status(404).send("Cant add empty body!")
    }
    const obj={
        ...req.body,
        id:users[users.length-1]?users[users.length-1].id+1:1,
    }
    users.push(obj)
    return res.status(200).send({users:users});

})




app.put("/:user_id", (req, res) => {

    if (!Object.keys(req.body).length) {
        return res.status(404).send("Cant add empty body!")
    }

    const user = users.find(user => user.id === parseInt(req.params.user_id));

    if (user) {
        for (const prams in req.body) {
            if(prams!=="id")
            user[prams] = req.body[prams]
        }
        console.log(user);
        return res.status(202).send(users)
    }

    const obj={
        ...req.body,
        id:users[users.length-1]?users[users.length-1].id+1:1,
    }

    users.push(obj)
    return res.status(202).send({ "users": users })
})





app.delete("/:user_id", (req, res) => {
    const usersTemp = users.filter(user => parseInt(req.params.user_id) !== user.id)
    if (usersTemp.length === users.length) {
        return res.status(404).send("User not found!")
    }
    users = usersTemp;
    return res.status(202).send({ "users": users })
})

app.listen(5000)