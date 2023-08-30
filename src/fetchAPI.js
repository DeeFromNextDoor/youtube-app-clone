import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// import axios from "axios";

// const BASE_URL = "https://www.googleapis.com/youtube/v3"; // Updated base URL

// export const fetchAPI = async (url) => {
//   // Build the complete URL by adding the API key as a query parameter
//   const completeURL = `${BASE_URL}/${url}&key=AIzaSyDv0sJcLLFWqXaMrPPkAz7VFWyXi-Uvbv4&maxResults=50`;

//   const { data } = await axios.get(completeURL);
//   return data;
// };
