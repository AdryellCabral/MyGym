import axios from "axios"

export const apiKabit = axios.create({
    baseURL: "https://capstonebd.herokuapp.com/"
})