import {$, content, empty} from './base.js';
import Coffee from '../assets/coffee.png';
import Rainbow from '../assets/rainbows.png';

export default function loadAbout() {
    console.warn('loadAbout invoked.');
    empty();

    let about = document.createElement('div');
    about.classList.add('about');
    content.appendChild(about);

    let leftImage = document.createElement('div');
    leftImage.classList.add('left');
    leftImage.style.backgroundImage = `url(${Coffee})`;
    about.appendChild(leftImage);

    let aboutText = document.createElement('div');
    aboutText.classList.add('text');
    about.appendChild(aboutText);

    let rightImage = document.createElement('div');
    rightImage.classList.add('right');
    rightImage.style.backgroundImage = `url(${Rainbow})`;
    about.appendChild(rightImage);

    aboutText.innerHTML = `<h2>DISCOVERY OF THE FUTURE</h2>
    <h3>HUMBLE BEGINNINGS</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare euismod finibus. Curabitur vehicula eleifend velit ullamcorper malesuada. Quisque condimentum mi a mi tristique, sed bibendum felis rhoncus. Curabitur nec dui vulputate nibh interdum ultricies vel id ex. Proin nisi velit, mollis eget dolor eget, luctus sodales est. Etiam lobortis tristique tristique. Maecenas venenatis libero non lorem blandit, facilisis blandit ligula mattis.</p>
    <h3>CLAIM TO FAME</h3>
    <p>Sed in lobortis turpis, ac tincidunt est. Sed imperdiet nibh risus, non ornare ex auctor sed. Phasellus nisi sapien, condimentum et urna ut, faucibus tempor metus. Donec laoreet ligula a ex elementum, pharetra gravida velit interdum. Donec auctor sapien a nisl fermentum placerat. Donec id sem et nulla tempus gravida. Phasellus semper purus a est.</p>
    <p>Pellentesque vel ligula et lectus consectetur eleifend at auctor nulla. Quisque vel tempor diam. Etiam laoreet a libero ut tempor. Vivamus et vestibulum augue.</p>
    <h3>MOVING FORWARD</h3>
    <p>Quisque odio lacus, luctus et facilisis vel, volutpat ut ipsum. Aliquam erat volutpat. Aliquam quis nulla metus. Nunc in ornare est, non tristique leo. Cras in eros a turpis volutpat elementum quis nec libero. Vivamus sed ultrices risus, nec hendrerit arcu. Maecenas dignissim non neque nec mollis. Nam.</p>`;

    let team = document.createElement('div');

    $('#cred').innerHTML = 'Photos &copy; Keriliwi, Alexander Grey on Unsplash.';
}