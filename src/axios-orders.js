import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-fa7ae-default-rtdb.firebaseio.com/'
});

export default instance;