import axios from "axios";

//console.log(import.meta.env);

// axios'un temel ayarları yapılmış olan bir kopyasını oluştur
// const api = axios.create({
  //baseURL: import.meta.env.VITE_BASE_URL,

  //headers: {
  //  "x-rapidapi-key": import.meta.env.VITE_API_KEY,
  //  "x-rapidapi-host": import.meta.env.VITE_API_HOST,
  //},
// });

const api =axios.create({

  baseURL: 'https://yt-api.p.rapidapi.com',
  
  headers: {
    'x-rapidapi-key': '4accead0cbmsh5ed0558440b1342p13b922jsn5c0d36316006',
    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
  }
}
  );

export default api;