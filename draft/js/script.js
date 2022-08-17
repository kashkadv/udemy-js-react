const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', ''),
      personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
      }

personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?', '')] = prompt('На сколько оцените его?', '');
personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?', '')] = prompt('На сколько оцените его?', '');

console.log(personalMovieDB);