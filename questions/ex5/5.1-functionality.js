const fs = require("fs");
const chalk = require("chalk");



const addUser = (id, name, email,password) => {
    const users = getUsers();
    const userFind = users.find(user => user.id === id);

    if (!userFind) {
        updateUsers([...users, { id: id, name: name, email: email,password:password }])
        console.log(chalk.bgGreen("User added!"));
    }
    else {
        console.log(chalk.bgRed("User alreday exists!"));
    }
}

const readUser = (id) => {
    const users = getUsers();
    const userFind = users.find(user => user.id === id);

    if (userFind) {
        console.log(chalk.inverse.green(userFind.name));
        console.log("id: ", chalk.inverse(userFind.id));
        console.log("email: ", chalk.inverse(userFind.email));
        console.log("password: ", chalk.inverse(userFind.password));
    } else {
        console.log(chalk.bgRed("User does not exist!"));
    }
}

const updateUser = (id, name=false, email=false,password=false) => {
    const users = getUsers();
    const userFind = users.find(user => user.id === id);

    if (userFind) {
        userFind.name = name ? name : userFind.name;
        userFind.email = email ? email : userFind.email;
        userFind.password=password?password:userFind.password;
        updateUsers(users);
        console.log(chalk.bgGreen.inverse("Updated successfully"), userFind);
    } else {
        console.log(chalk.bgRed("User does not exist!"));
    }
}

const updateUser2 = (obj) => {
    const users = getUsers();
    const userFind = users.find(user => user.id === obj.id);

    if (userFind) {
        userFind.name = obj.name ? obj.name : userFind.name;
        userFind.email = obj.email ? obj.email : userFind.email;
        userFind.password = obj.password ? obj.password : userFind.password;
        updateUsers(users);
        console.log(chalk.bgGreen.inverse("Updated successfully"), userFind);
    } else {
        console.log(chalk.bgRed("User does not exist!"));
    }
}

const deleteUser = (id) => {
    const users = getUsers();
    const newUsers = users.filter(user => id !== user.id)

    if (newUsers.length !== users.length) {
        updateUsers(newUsers);
        console.log(chalk.bgGreen.inverse("Deleted successfully"));
    } else {
        console.log(chalk.bgRed.inverse("No user found!"));
    }
}

const updateUsers = (notes) => {
    fs.writeFileSync("users.json", JSON.stringify(notes))
}

const getUsers = () => {
    try {
        const buffer = fs.readFileSync("users.json");
        return JSON.parse(buffer.toString())

    } catch {
        return [];

    }
}

module.exports = {
    addUser: addUser,
    readUser: readUser,
    updateUser: updateUser,
    updateUser2:updateUser2,
    deleteUser: deleteUser
}