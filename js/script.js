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
// const a = prompt ("один из последних просмотренных фильмов?" , ""),
//       b = prompt ("на сколько оцените его ?" , ""),
//       c = prompt ("один из последних просмотренных фильмов?" , ""),
//       d = prompt ("на сколько оцените его ?" , "");

// personalMovieDB.Movies[a] = b; 
// personalMovieDB.Movies[c] = d;
// 

for( let i = 0 ; i < 2 ; i++){
    const a = prompt ("один из последних просмотренных фильмов?" , ""),
          b = prompt ("на сколько оцените его ?" , "");
    if ( a  != null && b != null && a !='' && b != '' && a.length < 50){
        personalMovieDB.Movies[a] = b; 
        console.log('done');
    }
    else {
        console.log('error');
        i--;
    }

         
};
if (personalMovieDB.count < 10) {
    console.log("a let of movies");
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("you are good");
} else if (personalMovieDB.count >= 30 ){
    console.log("you are ammezing");
} else {
    console.log("ther are a mastek");
}
console.log(personalMovieDB);


 








