"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt ("Сколько фильмов вы уже просмотрели?" , "");
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt ("Сколько фильмов вы уже просмотрели?" , "");

    }
}

    start();


const personalMovieDB = {
    count: numberOfFilms,
    Movies: {},
    actors: {},
    genres:[],
    privat: false
};

function rememberMyFilms(){
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
    }
}
rememberMyFilms();



function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("a let of movies");
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("you are good");
    } else if (personalMovieDB.count >= 30 ){
        console.log("you are ammezing");
    } else {
        console.log("ther are a mastek");
    }
}
detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for( let i = 1 ; i <= 3 ; i++ ){
        personalMovieDB.genres[i - 1]= prompt(`ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();



 








