import './style.scss';

(doc => {

    const doThing = function() {
        console.warn('thing is being done...');
    }

    let nav = document.createElement('nav');
    doc.appendChild(nav);

    let logo = document.createElement('h2');
    logo.innerHTML = 'FUTURE<b id="home">FREEZE</b>';
    nav.appendChild(logo);

    let navigation = document.createElement('ul');
    nav.appendChild(navigation);

    const createNavLink = function(linkName) {
        let link = document.createElement('li');
        link.addEventListener('click', doThing);
        link.id = linkName.toLowerCase();
        link.textContent = linkName;
        navigation.appendChild(link);
    }

    createNavLink('Flavors');
    createNavLink('About');
    createNavLink('Contact');
    
})(document.body);