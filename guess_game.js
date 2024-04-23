const secret_number = Math.floor(Math.random()* 10 + 1);

const numberPlay = parseInt(
    prompt("Guess the number secret between 1 and 10: ")
);

console.log(`This is the number we play whit:  ${numberPlay}`)

if(numberPlay === secret_number){
    console.log("¡Congratulations, you guessed the number secret! ")
}else if (numberPlay < secret_number){
    console.log("the number is very low, try again.")
}else{
    console.log("the number is very high.")
}
