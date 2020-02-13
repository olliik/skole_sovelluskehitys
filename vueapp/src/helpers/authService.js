import axios from 'axios';

const URL = 'http://localhost:3000';


export default {
  Register: async (credentials) => {
    let res = await axios.post(URL + '/api/users/register', credentials)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    return res.data || [];
  },
  Login: async (credentials) => {
    let data = "";
    console.log('authservice login func');
    await axios.post(URL + '/api/users/login', credentials)
    .then(function (response) {
        console.log('authservice: ', response.data);
        data = response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
    return data;
  },
}