import axios from "axios";
export const serverApi = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
})
serverApi.defaults.params = {}
serverApi.defaults.params['key'] = 'AIzaSyCI0tPq7SoEIfpnkJRjqbu_YIDUeMVvZHU'



const configOMB = {
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
};
const key = 'AIzaSyCI0tPq7SoEIfpnkJRjqbu_YIDUeMVvZHU';


const API = {
    searchBooksByTitle: (title: string) => {
        return fetch(`${configOMB.baseURL}/?key=${key}&q=${title}`)
            .then(data => data.json())
    },
};

export default API;

