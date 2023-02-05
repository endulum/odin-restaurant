import {$, content, empty} from './base.js';
import IceCream from '../assets/icecream.png';
import Popsicles from '../assets/popsicles.png';
import Catering from '../assets/catering.png';

export default function loadHome() {
    console.warn('loadHome invoked.');
    empty();

    // first level

    let hero = document.createElement('div');
    hero.id = 'hero';
    content.appendChild(hero);

    let specialties = document.createElement('div');
    specialties.id = 'specialties';
    content.appendChild(specialties);

    // expanding on hero

    let circle = document.createElement('div');
    circle.classList.add('circle');
    hero.appendChild(circle);

    let icecream = new Image();
    icecream.src = IceCream;
    circle.appendChild(icecream);

    let heroText = document.createElement('div');
    heroText.classList.add('herotext');
    hero.appendChild(heroText);
    
    let heroTextHeader = document.createElement('h1');
    heroTextHeader.innerHTML = 'A TASTE OF THE <b>FUTURE</b>';
    heroText.appendChild(heroTextHeader);

    let heroTextParagraph = document.createElement('p');
    heroTextParagraph.innerHTML = 'You deserve more than normal, <b>and you know it.</b> Escape the mundanity of classic, overdone flavors. Future Freeze is a haven of innovation, a laboratory constantly evolving its carefully curated flavor selection. Join us on the cutting-edge of the history of frozen desserts.';
    heroText.appendChild(heroTextParagraph);

    // expanding on specialties

    let popsicleSeason = document.createElement('div');
    let popsicleSeasonImage = document.createElement('div');
    popsicleSeasonImage.style.backgroundImage = `url(${Popsicles})`;
    popsicleSeasonImage.style.backgroundPositionY = '-90px';
    let popsicleSeasonH3 = document.createElement('h3');
    popsicleSeasonH3.textContent = 'LIMITED TIME SPECIALTY';
    let popsicleSeasonH2 = document.createElement('h2');
    popsicleSeasonH2.innerHTML = '<b>POPSICLE SEASON</b>';
    let popsicleSeasonDescription = document.createElement('p');
    popsicleSeasonDescription.textContent = 'When the heat reigns once again, keep your cool and join us for our annual Popsicle Season. Our lineup of exlcusive summer flavors rotates out every year, making each a once-in-a-lifetime taste.';

    specialties.appendChild(popsicleSeason);
    popsicleSeason.appendChild(popsicleSeasonImage);
    popsicleSeason.appendChild(popsicleSeasonH3);
    popsicleSeason.appendChild(popsicleSeasonH2);
    popsicleSeason.appendChild(popsicleSeasonDescription);

    let catering = document.createElement('div');
    let cateringImage = document.createElement('div');
    cateringImage.style.backgroundImage = `url(${Catering})`;
    let cateringH3 = document.createElement('h3');
    cateringH3.textContent = 'FOR AN UPCOMING BIRTHDAY';
    let cateringH2 = document.createElement('h2');
    cateringH2.innerHTML = '<b>PREMIUM EVENT CATERING</b>';
    let cateringDescription = document.createElement('p');
    cateringDescription.textContent = 'Make your gatherings memorable with our customizable catering plans. With us, you are the architect of your experience. Our creative catering team will put you in full control of every detail.';

    specialties.appendChild(catering);
    catering.appendChild(cateringImage);
    catering.appendChild(cateringH3);
    catering.appendChild(cateringH2);
    catering.appendChild(cateringDescription);
}