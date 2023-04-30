let categoryList = document.querySelector('.box')

const getInfo = async () => {
  try {
    const response = await fetch('./data.json')
    const films = await response.json()

    const filteredYear = films.filter(film => film.year)
    const seriesCategory = films.filter(film => film.category === "TV Series")
    const moviesCategory = films.filter(film => film.category === "Movie")
    const title = films.filter(film => film.title)
    const upperEighteen = films.filter(film => film.rating === '18+')
    const imgs = films.filter(film => film.thumbnail)
    const searchBar = document.querySelector('.search-input');
    const searchQuery = searchBar.value.toLowerCase();

    
    // Create an array to store movie categories
    const movieCategories = [];
    const olderFilms = []

    moviesCategory.forEach(film => {
      movieCategories.push(film.category);
    });

  
    olderFilms.forEach(film => {
      olderFilms.push(film.year);
    });

    searchBar.addEventListener('input', () => {
     

      if (searchQuery === 'movies') {
        // console.log('Search query:', searchQuery);
        console.log('Movie categories:', movieCategories);
      }
      else if (searchQuery === '2017'){
        console.log('Search query:', searchQuery);
        console.log('Movie categories:', olderFilms);
      }
    });

 


    const old = filteredYear.forEach(film => {
      const year = document.createElement('p')
      year.classList.add('year')
      year.innerText = `${film.year}`
      // categoryList.appendChild(year)
    });

    const series = seriesCategory.forEach(film => {
      const category = document.createElement('p')
      category.classList.add('series')
      category.innerText = `${film.category}`
      // categoryList.appendChild(category)
    })

    const movies = moviesCategory.forEach(film => {
      const movies = document.createElement('p')
      movies.classList.add('movie')
      movies.innerText = `${film.category}`
      // categoryList.appendChild(movies)
    })

    const filmTitle = title.forEach(film => {
      const tittle = document.createElement('h2')
      tittle.classList.add('title')
      tittle.innerText = `${film.title}`
      // categoryList.appendChild(tittle)
    })

    const up = upperEighteen.forEach(film => {
      const upperEight = document.createElement('p')
      upperEight.classList.add('category')
      upperEight.innerText = `${film.rating}`
      // categoryList.appendChild(upperEight)
    })

    const bgImgs = imgs.forEach(film => {
      const img = document.createElement('img')
      img.classList.add('img')
      img.src = film.thumbnail.trending.small
      // categoryList.appendChild(img)
    });






  } catch (error) {
    console.log(error)
  }
}

getInfo()


