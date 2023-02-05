import './style.scss';
import loadHome from './pages/home.js'
// import _ from './pages/flavors.js';
// import _ from './pages/contact.js';
// import _ from './pages/about.js';
import {$, content} from './pages/base.js';

(db => {

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

    logo.addEventListener('click', loadHome);

    db.appendChild(content);

    loadHome();

})(document.body);