"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы обычный зритель!");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман!");
  } else {
    console.log("Error");
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log("Ваша база фильом:");
    console.table(personalMovieDB);
  } else {
    console.log("База фильмов скрыта.");
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();
