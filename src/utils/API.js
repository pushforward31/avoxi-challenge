import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?s=";
const APIKEY = process.env.REACT_APP_API_KEY;
//Just in case zip file  did not produce .env file. You can unccomment line 5.
// const APIKEY = "&apikey=9f572b90";  

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
