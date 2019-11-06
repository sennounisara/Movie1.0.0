const API_TOKEN = "d0c2553f2cdcf98afbc56879b6276748"

export function getFilmFromApi(text){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getImageFromAPI(name){
    return 'https://image.tmdb.org/t/p/w300'+name
}