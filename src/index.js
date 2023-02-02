import './style.css';
import Icecream from './icecream.png';

const $ = selector => document.querySelector(selector);

const ic = new Image();
ic.src = Icecream;

$('.circle').appendChild(ic);