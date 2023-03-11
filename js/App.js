let title = document.querySelector('.main_heading');
let name = 'I am a creative Front-End Dev';
let index = 1;

const typewriter = () => {

let new_title = name.slice(0, index);
title.innerText = new_title;



/*if(index > name.length){
    index = 1;
}else{
    index++;
}*/
// You can write this way  (Conditional Operator)

index > name.length ? index = 1 : index++;
// You can also write it with short way (Turnary Operator)

setTimeout(() => typewriter(), 100)

};

typewriter();