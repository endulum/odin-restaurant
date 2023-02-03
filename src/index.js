import './style.scss';
import loadHome from './pages/home.js'
import loadFlavors from './pages/flavors.js';
import loadContact from './pages/contact.js';
import loadAbout from './pages/about.js';

(doc => {

    // const doThing = function() {
    //     console.warn('thing is being done...');
    // }

    let nav = document.createElement('nav');
    doc.appendChild(nav);

    let main = document.createElement('main');
    main.id = 'main';
    doc.appendChild(main);

    loadHome();

    let logo = document.createElement('h2');
    logo.innerHTML = 'FUTURE<b id="home">FREEZE</b>';
    nav.appendChild(logo);
    document.getElementById('home').addEventListener('click', loadHome);

    let navigation = document.createElement('ul');
    nav.appendChild(navigation);

    const createNavLink = function(linkName, destination) {
        let link = document.createElement('li');
        link.addEventListener('click', destination);
        link.id = linkName.toLowerCase();
        link.textContent = linkName;
        navigation.appendChild(link);
    }

    createNavLink('Flavors', loadFlavors);
    createNavLink('About', loadAbout);
    createNavLink('Contact', loadContact);
    
})(document.body);