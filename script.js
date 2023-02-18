const canvas = document.querySelector('#drawingCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pip = document.createElement('img');
const boy = document.createElement('img');

pip.src = 'images/pip.png';
boy.src = 'images/boy.png';

let paintbrush = pip;

const context = canvas.getContext('2d');


const handleMouseMove = (event) => {
    const left = event.clientX;
    const top = event.clientY;

    context.drawImage(paintbrush, left, top);
}

const handleClick = () => {

    if (paintbrush === pip){
        paintbrush = boy;
    } else {
        paintbrush = pip
    }

}

canvas.addEventListener('click', handleClick);
canvas.addEventListener('mousemove', handleMouseMove);