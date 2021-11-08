const axios = require("axios");
const request = require("request");

const getDataAxios = async () => {
    console.log((await axios.get("https://api.chucknorris.io/jokes/random")).data.value);
}

const getDataRequest = () => {
    request({ "url": "https://api.chucknorris.io/jokes/random",json:true }, (err, res) => {
        console.log(res.body.value);
    })
}

// getDataAxios()
getDataRequest()