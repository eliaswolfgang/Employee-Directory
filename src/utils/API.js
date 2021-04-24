import axios from 'axios';

export default {
    searchTerms: function(query) {
        return axios.get(`https://randomuser.me/api/?results=${query}`);
    }
};