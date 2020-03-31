import axios from 'axios';



export default {
  getALl: async () => {
    let res = await axios.get('/api/movies');
    return res;
  },
}