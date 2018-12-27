import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-burger-42f06.firebaseio.com/"
});

export default instance;