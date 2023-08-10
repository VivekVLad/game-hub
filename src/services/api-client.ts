import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'cb8f2ca1d11d49e7b46e959a8fefbb15'
    }
})