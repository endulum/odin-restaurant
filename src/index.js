import './style.scss';
// import loadHome from './pages/home.js'; DONE!
// import _ from './pages/flavors.js';
// import _ from './pages/contact.js';
// import _ from './pages/about.js';
import {$, content} from './pages/base.js';
import loadFlavors from './pages/flavors';

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

    // let links = document.createElement('ul');
    // nav.appendChild(links);

    // let linkFlavors = document.createElement('li');
    // linkFlavors.textContent = 'Flavors';
    // linkFlavors.addEventListener('click', doSomething);
    // links.appendChild(linkFlavors);

    db.appendChild(content);

    // tie home content together
    // logo.addEventListener('click', loadHome);
    // loadHome();

    loadFlavors();
    

})(document.body);