import axios from "axios";

//  create axios instance

const instance = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

export const fetcher = (url) => instance.get(url).then((res) => res.data);
