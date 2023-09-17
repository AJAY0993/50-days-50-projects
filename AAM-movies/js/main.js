const links = document.querySelectorAll('li a')
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const SEARCH_API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query='
getMovies(API_URL)

function getMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('main').innerHTML = ''
            data['results'].forEach(element => {

                const movieCard = document.createElement('div')
                movieCard.classList.add('movie--card')
                movieCard.innerHTML = `<div class="image">
                <img src="https://image.tmdb.org/t/p/w1280${element.poster_path}" alt="">
            </div>
            <h2 class="movie--title">${element.title}</h2>
            <span class="movie--rating ${classByRating(+element.vote_average)}">${element.vote_average}</span>
            <p class="movie--overview">${element.overview}
            </p>
        </div>
     `
                document.querySelector('main').appendChild(movieCard)

            });
        }


        )
        .catch(err => { document.querySelector('main').innerHTML = `<h1>${err}</h1>` })
}

function classByRating(rating) {
    if (rating > 8) { return 'green' }
    if (rating > 6) { return 'yellow' }
    if (rating > 4) { return 'orange' }
    else { return 'red' }
}

document.querySelector('button').addEventListener('click', () => {
    const query = document.querySelector('input').value
    getMovies(SEARCH_API_URL + query)
})

links.forEach(link => link.addEventListener('click', () => { location.reload() }))