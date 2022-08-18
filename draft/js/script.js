"use strict";

let numberOfFilms;

function start() {
    while(numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}

start();

const personalMovieDB = {
        count: +numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
      }

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let movieTitle = '';
        let movieScore = '';
    
        while(movieScore === null || movieScore.length < 1 || movieTitle === null || movieTitle.length < 1 || movieTitle.length > 50) {
            movieTitle = prompt('Один из последних просмотренных фильмов?', '');
            movieScore = prompt('На сколько оцените его?', '');
        }
    
        personalMovieDB.movies[movieTitle] = movieScore;
    }
}

rememberMyFilms();

function getMyRating() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

getMyRating();


function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres()
{
    for (let i = 0; i < 3; i++) {
        let answer = '';
        while(answer < 1 || answer == '') {
            answer = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
        }
        personalMovieDB.genres[i] = answer;
    }
}

writeYourGenres();
showMyDB();

