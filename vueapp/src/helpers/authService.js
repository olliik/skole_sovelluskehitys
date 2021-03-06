import axios from 'axios';


const config = {
  headers: { 'Content-Type': 'multipart/form-data' }
};

export default {
  Register: async (credentials) => {
    let res = await axios.post('/api/users/register', credentials);
    return res;
  },
  Login: async (credentials) => {
    let res = await axios.post('/api/users/login', credentials);
    console.log('authServ login res: ', res)
    return res;
  },
  getUser: async (userID) => {
    let res = await axios.get('/api/users/' + userID);
    console.log('authServ getuser res: ', res)
    return res;
  },
  updateUserData: async (userID, formData) => {
    let res = await axios.put('/api/users/' + userID, formData, config);
    console.log('authServ getuser res: ', res)
    return res;
  },
}