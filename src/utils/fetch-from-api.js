import axios from 'axios';

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': '7a96c20a00msh5d1a4731f4bf04ep155b08jsn245ad5951183',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const fetchFromApi = async () => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}

export default fetchFromApi;
