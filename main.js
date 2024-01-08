import './style.scss';
import * as bootstrap from 'bootstrap';
import ScrollReveal from 'scrollreveal';


let toDown = {
    distance: '50px',
    origin: 'top',
    interval: 400,
    duration: 900
};

ScrollReveal().reveal('.to-down', toDown);
let toUp = {
    distance: '50px',
    origin: 'bottom',
    interval: 400,
    duration: 900
};

ScrollReveal().reveal('.to-up', toUp);

let toRight = {
    distance: '50px',
    origin: 'left',
    interval: 400,
    duration: 900
};

ScrollReveal().reveal('.to-right', toRight);

let toLeft = {
    distance: '50px',
    origin: 'right',
    interval: 300,
    duration: 800
};

ScrollReveal().reveal('.to-left', toLeft);