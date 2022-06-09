import axios from "axios";
const BASE_URL = "https://api.opendota.com/api/";

const getUser = () => {
    return axios.get(BASE_URL+'players/88470');
}

const getProPlayers = () => {
    return axios.get(BASE_URL+'proPlayers');
}

export {getUser, getProPlayers}