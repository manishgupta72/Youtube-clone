import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: {
        hl: 'en',
        gl: 'in'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY||'4e6b188005mshb8edc807816766cp16da39jsn995a11f9fd09',
        
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async (url) => {


    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    } catch (error) {
        console.error(error);
    }
};
