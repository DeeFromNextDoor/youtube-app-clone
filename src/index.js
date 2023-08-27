const axios = require("axios");

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": "0465c1ae91msh4042b85c2e4076cp1650e7jsn0e861beb1758",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
