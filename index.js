const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(cors());

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODg3MDZjOTY3MDliNjVmNjhjMzU0OGZiMzJjZTI1MyIsIm5iZiI6MTcyNjUxMjA2NS4wODgsInN1YiI6IjY2ZTg3YmMxMDUwZjE0ZTRmY2QwMjQ4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RERGdrEkjlzEDi9WMDDOjJpnUh5bOCM8VHLiSvvjhKE"

app.get('/', (req, res) => {
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc", {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    }).then(res => res.json()).then(data => {
        res.send(data);
    })


});

app.listen(5500, () => {
    console.log('Server running on port 5500');
});