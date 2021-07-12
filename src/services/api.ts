import axios from "axios";

export const apiMyGym = axios.create({
  baseURL: "https://capstonebd.herokuapp.com/",
});
