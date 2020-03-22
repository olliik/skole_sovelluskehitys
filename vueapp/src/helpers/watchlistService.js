import axios from 'axios';

const URL = 'http://localhost:3000';

export default {
    getUserWatchlist: async (userId) => {
        let res = await axios.get(URL + '/api/watchlist/user/' + userId);
        return res;
    },
    AddItem: async (data) => {
      console.log(data);
      let res = await axios.post(URL + '/api/watchlist/add', data);
      console.log(res)
      return res;
    }
}