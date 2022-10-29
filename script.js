const score1 = document.querySelector('#p1');
const score2 = document.querySelector('#p2');
const add1 = document.querySelector('#b1');
const add2 = document.querySelector('#b2');


let counter1 = 0;
let counter2 = 0;

add1.addEventListener('click', () => addPoints(counter1));
add2.addEventListener('click', () => addPoints(counter2));


function addPoints(counter){
    if(counter === counter1){
        counter1 < 7 ? counter1 ++ : add1.disabled = true;
        score1.innerText = counter1; 
    }else{
        counter2 < 7 ? counter2 ++ : add2.disabled = true; 
        score2.innerText = counter2; 
    }
}