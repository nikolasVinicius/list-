
const form = document.getElementById('add-movie-form');
const movieList = document.getElementById('movie-list');


form.addEventListener('submit', event => {

  event.preventDefault();


  const title = event.target.elements.title.value;


  const movie = document.createElement('li');
  movie.textContent = title;


  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Excluir';
  deleteButton.addEventListener('click', () => movieList.removeChild(movie));
  movie.appendChild(deleteButton);

  movieList.appendChild(movie);

  event.target.elements.title.value = '';
});