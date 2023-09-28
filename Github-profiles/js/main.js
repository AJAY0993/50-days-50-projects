const main = document.querySelector('main')
const input = document.querySelector('input')
const form = document.querySelector('form')
const API_URL = `https://api.github.com/users/`

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userName = input.value.trim().toLowerCase()
    getProfile(userName)
})

function getProfile(input) {
    fetch(API_URL + input)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            console.log(data.login)
            console.log(data.avatar_url)
            main.innerHTML = `<div class="card">
        <div class="image">
            <img src="${data.avatar_url}" alt="">
        </div>
        <div class="user-info">
            <h2>${data.login}</h2>
            <p>${data.bio}
            </p>
            <ul>
                <li>${data.followers}<strong>Followers</strong></li>
                <li>${data.following}<strong>Following</strong></li>
                <li>${data.public_repos}<strong>Repos</strong></li>
            </ul>
            <div id="repos">
               
            </div>
        </div>
    </div>`
        })
        .then(data => {
            getRepos(input)
        })
        .catch(error => {
            console.log(error)
            main.innerHTML = `<h1>${error.message}</h1>`
        })
}


function getRepos(input) {
    fetch(API_URL + input + '/repos')
        .then(data => data.json())
        .then(data => addRepos(data))
        .catch(data => {
            document.querySelector('#repos').innerHTML = '<h3>some error occured</h3>'
        })
}

function addRepos(reposArray) {
    const reposEl = document.querySelector('#repos')
    reposArray.slice(0, 11).forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.innerText = repo.name
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        reposEl.appendChild(repoEl)
    })
}