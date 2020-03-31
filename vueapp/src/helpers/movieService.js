import axios from 'axios';

const URL = 'https://localhost:3000';

export default {
  getALl: async () => {
    let res = await axios.get(URL + '/api/movies');
    return res;
  },
}