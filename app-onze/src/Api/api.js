
//BASE DA URL:https://api.themoviedb.org/3/

//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=3a38a2377454d98eeb8f8f8bf0638850&language=pt-BR

import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api;