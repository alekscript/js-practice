let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

for (let i = 0; i < 2; i++) {
  let moviesName = prompt('Один из просмотренных фильомв?', '');
  let moviesScore = prompt('На сколько его оцение?', '');
  let str = moviesName.length;

  if (moviesName != null && moviesScore != null && moviesName != '' && moviesScore != '' && moviesName.length < 50) {
    personalMovieDB.movies[moviesName] = moviesScore;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }

}

if (personalMovieDB.count < 10) {
  console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы обычный зритель!');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман!');
} else {
  console.log('Error');
}



console.table(personalMovieDB);

