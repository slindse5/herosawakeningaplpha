import axios from 'axios';

let affirmationService = {
    getAll: function() {
        let url = `/api/affirmations/`;
        return axios.get(url);
    },
    getById: function(id) {
        let url = `/api/affirmations/${id}`;
        return axios.get(url);
    },
};

export default affirmationService;
