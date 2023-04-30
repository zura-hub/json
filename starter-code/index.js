const searchBar = document.querySelector('.search-input');
const box = document.querySelector('.box');

const getInfo = async () => {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    console.log(data);

// sorting films by years or title
searchBar.addEventListener('input', () => {
  for (let i = 2013; i <= 2023; i++) {
    if (searchBar.value.toLowerCase() === i.toString()) {
      const year = data.find(item => item.year === i);
      console.log(year);
      const title = data.find(item => item.title === i)
      console.log(title)
    }
  }
});



    // card
    data.forEach((movie) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${movie.title}</h2>
        <img  src="${movie.thumbnail.trending.small}" alt="${movie.title}">
        <p>Category: ${movie.category}</p>
        <p>Rating: ${movie.rating}</p>
        <p>${movie.isBookmarked ? 'Bookmarked' : 'Not Bookmarked'}</p>
        <p>${movie.isTrending ? 'Trending' : ''}</p>
        <p>${movie.description}</p>
      `;
      box.appendChild(card);
    });





    // catching errors
  } catch (error) {
    console.log(error);
  }
};

getInfo();
