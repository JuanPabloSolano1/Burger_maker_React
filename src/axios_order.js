import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-3064e.firebaseio.com/item"
});

export default instance;
