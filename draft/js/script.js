const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', ''),
      personalMovieDB = {
        count: +numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
      }

for (let i = 0; i < 2; i++) {
    let movieTitle = '';
    let movieScore = '';

    while(movieScore === null || movieScore.length < 1 || movieTitle === null || movieTitle.length < 1 || movieTitle.length > 50) {
        movieTitle = prompt('Один из последних просмотренных фильмов?', '');
        movieScore = prompt('На сколько оцените его?', '');
    }

    personalMovieDB.movies[movieTitle] = movieScore;
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);

