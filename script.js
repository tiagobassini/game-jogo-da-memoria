
let order = [];
let clickdOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('blue');
const red = document.querySelector('red');
const green = document.querySelector('green');
const yellow = document.querySelector('yellow');

let shuffleOrder = () =>{
    let = colorOrder = Math.floor(Math.random() * 4);
    order[order.lenght] = colorOrder;
    clickdOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+1);
    }

}

//ascende a proxima cor
let lightColor = (element, number) =>{

    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    },number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}
