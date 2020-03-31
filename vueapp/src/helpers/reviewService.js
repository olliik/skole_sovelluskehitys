import axios from 'axios';

const URL = 'https://localhost:3000';

export default {
    getUserReviews: async (id) => {
        let res = await axios.get(URL + '/api/reviews/user/' + id);
        return res;
    },
    PostReview: async (data) => {
      console.log(data);
      let res = await axios.post(URL + '/api/reviews/add', data);
      console.log(res)
      return res;
    }
}