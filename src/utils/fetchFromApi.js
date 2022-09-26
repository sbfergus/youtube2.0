import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
    url: BASE_URL,
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': "cbf93f50c0mshe3f948be30aeef0p110453jsn29d15e377c7a", //add process.env.REACT_APP_API_KEY on build
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


export const fetchFromAPI = async (url) => {
    const {
        data
    } = await axios.get(`${BASE_URL}/${url}`, options);
    return data
}