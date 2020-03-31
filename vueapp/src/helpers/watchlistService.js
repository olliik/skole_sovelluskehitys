import axios from 'axios';


export default {
    getUserWatchlist: async (userId) => {
        let res = await axios.get('/api/watchlist/user/' + userId);
        return res;
    },
    AddItem: async (data) => {
      console.log(data);
      let res = await axios.post('/api/watchlist/add', data);
      console.log(res)
      return res;
    }
}