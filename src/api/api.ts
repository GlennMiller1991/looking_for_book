const configOMB = {
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
};
const key = 'AIzaSyCI0tPq7SoEIfpnkJRjqbu_YIDUeMVvZHU';
const API = {
    searchFilmsByTitle: (title: string) => {
        return fetch(`${configOMB.baseURL}/?key=${key}&q=${title}`)
            .then(data => data.json())
    },
};


export default API;
