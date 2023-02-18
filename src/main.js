const api = axios.create();

const URL_GLOBAL = 'https://api.themoviedb.org/3'
const URL_IMAGE = 'https://image.tmdb.org/t/p/w300'

async function getTrendingMoviesPreview(){

    const res = await fetch(URL_GLOBAL + '/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();

    const movies = data.results;

    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', URL_IMAGE + movie.poster_path);

        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });


}

getTrendingMoviesPreview();

async function getCategoriesPreview(){
    const res = await fetch(URL_GLOBAL + '/genre/movie/list?api_key=' + API_KEY + '&language=es');
    const data = await res.json();
    const genres = data.genres;
    console.log({genres})

    genres.forEach(genre =>{
        const categoriesPreview = document.querySelector('#categoriesPreview .categoriesPreview-list');

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container')

        const categoryTitle = document.createElement('h3');
        categoryTitle.setAttribute('id', 'id' + genre.id);
        categoryTitle.classList.add('category-title');
        const categoryTitleText = document.createTextNode(genre.name)

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categoriesPreview.appendChild(categoryContainer);
    });
}

getCategoriesPreview();
