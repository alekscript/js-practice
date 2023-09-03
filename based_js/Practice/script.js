"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      let moviesName = prompt("Один из просмотренных фильомв?", "").trim();
      let moviesScore = prompt("На сколько его оцение?", "").trim();
      let str = moviesName.length;

      if (
        moviesName != null &&
        moviesScore != null &&
        moviesName != "" &&
        moviesScore != "" &&
        moviesName.length < 50
      ) {
        personalMovieDB.movies[moviesName] = moviesScore;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы обычный зритель!");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман!");
    } else {
      console.log("Error");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
    //   let genre = prompt(
    //     `Ваш любимый жанр под номером ${i}`
    //   );
    //   if(genre === '' || genre == null){
    //     console.log('Вы ввели якусь херню или не ввели вообще!');
    //     i--;
    //   } else {
    //     personalMovieDB.genres[i - 1] = genre;
    //   }
    let genre = prompt(
        `Введите ваши любимые жанры через запятую`
      );
      if(genre === '' || genre == null) {
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
      } else {
        personalMovieDB.genres = genre.split(',').toLowerCase();
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) =>{
        console.log(`Любимый жанр ${i+1} - это ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};
