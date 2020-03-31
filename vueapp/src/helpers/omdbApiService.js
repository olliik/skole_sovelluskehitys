import axios from 'axios';

// format: http://www.omdbapi.com/?i=[TITLE]&apikey=[KEY]
const BASEURL = `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_OMDbAPI_KEY}`;


export default {
  Query: async (title, year) => {
    let res = null;
    title = title.replace(" ", "+");
    if (title !== null && year !== null) {
        res = await axios.get(BASEURL + '&t=' + title, + '&y=' + year);
        console.log('eka: ' + BASEURL + '&t=' + title, + '&y=' + year);
        console.log(res);
        return res;
    } else if (title !== null && year === null) {
        res = await axios.get(BASEURL + '&t=' + title);
        console.log('toka: ' + BASEURL + '&t=' + title)
        console.log(res)
        return res;
    }
    return res;
  }
}