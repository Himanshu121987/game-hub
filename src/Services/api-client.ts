import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{key:'27dbc6d780c34688bb147bbdd7928797'}
})