import axios from "axios";


export const Api = axios.create({
  baseURL: `https://n0a7y6cp.api.sanity.io/`,
  timeout: "50000",
});


