import {$, content, empty} from './base.js';
import Cone from '../assets/cone.png';
import Popsicles from '../assets/summerpopsicles.png';

export default function loadFlavors() {
    console.warn('loadFlavors invoked.');
    content.style.marginBottom = '100px';
    empty();

    // first level

    let core = document.createElement('div');
    core.classList.add('flavormenu');
    content.appendChild(core);

    let coreImage = document.createElement('div');
    coreImage.style.backgroundImage = `url(${Cone})`;
    coreImage.style.backgroundPositionX = 'center';
    core.appendChild(coreImage);
    
    let coreDiv = document.createElement('div');
    core.appendChild(coreDiv);

    let coreH3 = document.createElement('h3');
    coreH3.textContent = 'SAVOR THE HEART OF THE FUTURE';
    coreDiv.appendChild(coreH3);

    let coreH2 = document.createElement('h2');
    coreH2.textContent = 'YEAR-ROUND CORE CATALOGUE';
    coreDiv.appendChild(coreH2);


    let popsicles = document.createElement('div');
    popsicles.classList.add('flavormenu');
    content.appendChild(popsicles);

    let popsiclesImage = document.createElement('div');
    popsiclesImage.style.backgroundImage = `url(${Popsicles})`;
    popsiclesImage.style.backgroundPosition = 'center';
    popsicles.appendChild(popsiclesImage);

    let popsiclesDiv = document.createElement('div');
    popsicles.appendChild(popsiclesDiv);

    let popsiclesH3 = document.createElement('h3');
    popsiclesH3.textContent = 'REDEFINING THE POPSICLE';
    popsiclesDiv.appendChild(popsiclesH3);

    let popsiclesH2 = document.createElement('h2');
    popsiclesH2.textContent = 'EXCLUSIVE SUMMER SELECTION';
    popsiclesDiv.appendChild(popsiclesH2);

    // make core menu

    let coreFlavorNames = [
        'Velvet Eclipse',
        'Twitterpation',
        'Flipside',
        'Gilded Masquerade',
        'Shadow of a Dreamwalker',
        'Ocean\'s Affair',
        'Envy',
        'Toasty Cottage'
    ]; let coreFlavorDescriptions = [
        'Our unique perspective of the classic red velvet flavor, with twists of cherry, licorice, and blackberry.',
        'A delicate dance of floral and nutty flavors, consisting of pistachio and almond and topped with real, organically-grown rose petals.',
        'A harmony of fiery cinnamon and brisk mint delivers the best of both worlds in each scoop.',
        'Mystery and intrigue arrives to your tongue cloaked in licorice and star anise, catching starlight in its edible gold dust.',
        'Dreamy swirls of honey, vanilla, and butterscotch, topped with real, organically-grown lavender sprigs.',
        'Dive into waves of blueberry and raspberry, indulging on its colorful sugar shells hidden within.',
        'Infused with matcha tea, mint, and basil, and adorned with pistachio bits and strawberry slices, these scoops can\'t get any greener.',
        'Welcome the morning with a rich coffee flavor blended with caramel and chocolate chip.'
    ]; let coreFlavorColors = [
        ['540804', '4a4e69', '8d99ae'],
        ['d4e09b', 'f19c79', 'a44a3f'],
        ['b2f7ef', 'e5383b', '660708'],
        ['423e3d', 'a4b3a4', 'e3c49a'],
        ['a53860', 'f18701', 'ffe66d'],
        ['cdb4db', 'ffafcc', 'a2d2ff'],
        ['6a994e', 'a7c957', 'bc4749'],
        ['bb9457', '432818', '99582a']
    ]

    let coreMenuList = document.createElement('ul');
    coreMenuList.classList.add('flavors');
    coreDiv.appendChild(coreMenuList);
    for (let i = 0; i < coreFlavorNames.length; i++) {
        let flavor = document.createElement('li');
        flavor.innerHTML = `
            <b>${coreFlavorNames[i]}</b>
            <div class='dot' style='background-color: #${coreFlavorColors[i][0]}'></div>
            <div class='dot' style='background-color: #${coreFlavorColors[i][1]}'></div>
            <div class='dot' style='background-color: #${coreFlavorColors[i][2]}'></div>
            <br>${coreFlavorDescriptions[i]}`;
        coreMenuList.appendChild(flavor);
    }

    // make popsicle menu

    let popsiclesFlavorNames = [
        'Dancing Dragonfly',
        'Mile of Orchards',        
        'Sunbreath',
        'Shattered Prism',
        'Ten-Minute Royalty'
    ]; let popsiclesFlavorDescriptions = [
        'A taste of paradise itself, condensed into a concoction of sweet dragon fruit striped with creamy coconut.',
        'Jam-packed with the flavors of several fruits - apple, orange, plum - topped off with a zap of lemon.',        
        'The unique and exotic taste of starfruit dominates this blend, alongside peach and pieces of pineapple.',
        'Bits of raspberry, blueberry, and blackberry hide in this spectral swirl of color.',
        'Indulge like a king on this feast of grape and watermelon, adorned with gold-dusted organically-grown rose petals.'
    ]; let popsiclesFlavorColors = [
        ['461220', 'b23a48', 'fed0bb'],
        ['c9cba3', 'f2a65a', '582c4d'],
        ['ffe66d', 'ff6b6b', 'c5d86d'],
        ['9c89b8', 'f0a6ca', 'b8bedd'],
        ['b58db6', '9a031e', 'f7b801']
    ]

    let popsiclesMenuList = document.createElement('ul');
    popsiclesMenuList.classList.add('flavors');
    popsiclesDiv.appendChild(popsiclesMenuList);
    for (let i = 0; i < popsiclesFlavorNames.length; i++) {
        let flavor = document.createElement('li');
        flavor.innerHTML = `
            <b>${popsiclesFlavorNames[i]}</b>
            <div class='dot' style='background-color: #${popsiclesFlavorColors[i][0]}'></div>
            <div class='dot' style='background-color: #${popsiclesFlavorColors[i][1]}'></div>
            <div class='dot' style='background-color: #${popsiclesFlavorColors[i][2]}'></div>
            <br>${popsiclesFlavorDescriptions[i]}`;
        popsiclesMenuList.appendChild(flavor);
    }

    $('#cred').innerHTML = 'Photos &copy; Tamas Pap, Anna Bratiychuk on Unsplash.';
}