import './style.scss';
import {$, content} from './pages/base.js';

import loadHome from './pages/home.js';
import loadFlavors from './pages/flavors.js';
import loadAbout from './pages/about.js';
import loadContact from './pages/contact.js';

(db => {
    const doSomething = () => console.warn('something is done');

    // build navigation bar
    let nav = document.createElement('nav');
    nav.id = 'nav';
    db.appendChild(nav);

    // build footer
    let footer = document.createElement('footer');
    footer.innerHTML = 'Copyright &copy; 2023 endulum, courtesy of The Odin Project.<br>';
    let photoCred = document.createElement('small');
    photoCred.id = 'cred';
    db.appendChild(footer);
    footer.appendChild(photoCred);

    // build logo
    let logoText = document.createElement('h2');
    logoText.textContent = 'FUTURE';
    let logo = document.createElement('b');
    logo.textContent = 'FREEZE';
    nav.appendChild(logoText);
    logoText.appendChild(logo);

    let links = document.createElement('ul');
    nav.appendChild(links);

    let linkFlavors = document.createElement('li');
    linkFlavors.textContent = 'Flavors';
    linkFlavors.addEventListener('click', loadFlavors);
    links.appendChild(linkFlavors);

    let linkAbout = document.createElement('li');
    linkAbout.textContent = 'About';
    linkAbout.addEventListener('click', loadAbout);
    links.appendChild(linkAbout);

    let linkContact = document.createElement('li');
    linkContact.textContent = 'Contact';
    linkContact.addEventListener('click', loadContact);
    links.appendChild(linkContact);

    db.appendChild(content);

    // tie home content together
    logo.addEventListener('click', loadHome);
    loadHome();

})(document.body);