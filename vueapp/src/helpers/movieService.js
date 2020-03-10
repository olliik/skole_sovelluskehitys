import axios from 'axios';

const URL = 'http://localhost:3000';

export default {
  getALl: async () => {
    let res = await axios.get(URL + '/api/movies');
    return res;
  },
  /*
  Login: async (credentials) => {
    let res = await axios.post(URL + '/api/users/login', credentials);
    console.log('authServ login res: ', res)
    return res;
  },
  getUser: async (userID) => {
    let res = await axios.get(URL + '/api/users/' + userID);
    console.log('authServ getuser res: ', res)
    return res;
  },
  updateUserData: async (userID, formData) => {
    let res = await axios.put(URL + '/api/users/' + userID, formData, config);
    console.log('authServ getuser res: ', res)
    return res;
  },
  */
}