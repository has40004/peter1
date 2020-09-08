"use strict";
// const result = console.log(confirm ('hello', ''));
// const answer = prompt ('haw are you?' , 'hi');
// console.log(answer);
// const answer = [];
// answer [0] = prompt ('как ваше имя?', '');
// answer [1] = prompt ('как ваша фамилия?', '');
// answer [2] = prompt ('сколько вам лет?', '');
// document.write(answer);
// let a = 10,
//     b =5;
//     ++a;
//     ++b;
// console.log(a);
// console.log(b);
const numberOfFilms = +prompt ("Сколько фильмов вы уже просмотрели?" , "");
const personalMovieDB = {
    count: numberOfFilms,
    Movies: {},
    actors: {},
    genres:[],
    privat: false
};
const a = prompt ("один из последних просмотренных фильмов?" , ""),
      b = prompt ("на сколько оцените его ?" , ""),
      c = prompt ("один из последних просмотренных фильмов?" , ""),
      d = prompt ("на сколько оцените его ?" , "");

personalMovieDB.Movies[a] = b; 
personalMovieDB.Movies[c] = d;
console.log(personalMovieDB);













