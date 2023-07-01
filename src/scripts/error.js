function redirectDefaultPage () {
    const buttonNewSearch = document.querySelector('.error__newSearch')

    buttonNewSearch.addEventListener('click', (e) => {
        window.location = '../../index.html'
        e.preventDefault()
     })
}

redirectDefaultPage ()