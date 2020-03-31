import axios from 'axios';

export default {
    getUserReviews: async (id) => {
        let res = await axios.get('/api/reviews/user/' + id);
        return res;
    },
    PostReview: async (data) => {
      console.log(data);
      let res = await axios.post('/api/reviews/add', data);
      console.log(res)
      return res;
    }
}