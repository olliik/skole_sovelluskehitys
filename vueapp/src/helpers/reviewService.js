import axios from 'axios';

const URL = 'http://localhost:3000';

export default {
    getUserReviews: async (username) => {
        let res = await axios.get(URL + '/api/reviews/user/' + username);
        return res;
    },
    /*
    PostReview: async (credentials) => {
      let res = await axios.post(URL + '/api/users/login', credentials);
      return res;
    }
    */
}