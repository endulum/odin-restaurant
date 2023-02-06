import {$, content, empty} from './base.js';
import Sandra from '../assets/sandra.jpg';
import Samantha from '../assets/samantha.jpg';
import Jeremy from '../assets/jeremy.jpg';
import Bobson from '../assets/bobson.jpg';

export default function loadContact() {
    console.warn('loadContact invoked.');
    empty();

    let inquiry = document.createElement('form');
    inquiry.classList.add('inquiry');
    content.appendChild(inquiry);

    let inquiryText = document.createElement('div');
    inquiryText.classList.add('text');
    inquiryText.innerHTML = `<h2>HAVE AN INQUIRY?</h2><p>Whatever you got, the team is always willing to listen. Your voices are valuable to us.</p><p>You may also directly contact an individual of our team using the information below.</p>`;

    inquiry.appendChild(inquiryText);

    let inquiryDetails = document.createElement('div');
    inquiryDetails.classList.add('details');
    inquiryDetails.innerHTML = `
    <div>
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" required>
    </div><div>
        <label for="email">E-Mail</label>
        <input type="email" id="email" name="email" required>
    </div><div>
        <label for="tel">Phone #</label>
        <input type="tel" id="tel" name="tel" required>
    </div>`;

    inquiry.appendChild(inquiryDetails);

    let inquirySubmit = document.createElement('button');
    inquirySubmit.textContent = 'Submit';
    inquiry.appendChild(inquirySubmit);

    let inquiryBox = document.createElement('textarea');
    inquiryBox.setAttribute('placeholder', 'Your concerns, praise, or otherwise go here.')
    inquiry.appendChild(inquiryBox);

    let people = document.createElement('div');
    people.classList.add('people');
    content.appendChild(people);

    let team = [
        [Sandra, 'Sandra Doe', 'Team Founder', 'sandradoe@mail.me', '(888) - 888 - 8888'],
        [Samantha, 'Samantha Doe', 'Executive Manager', 'samanthadoe@mail.me', '(777) - 777 - 7777'],
        [Jeremy, 'Jeremy Doe', 'Financial Advisor', 'jeremydoe@mail.me', '(999) - 999 - 9999'],
        [Bobson, 'Bobson Dugnutt', 'Innovator', 'bobson@email.me', '(000) - 000 - 0000']
    ];

    for (let teamMember in team) {
        let person = document.createElement('div');
        person.classList.add('person');

        let personImage = document.createElement('div');
        personImage.classList.add('image');
        personImage.style.backgroundImage = `url(${team[teamMember][0]})`;
        person.appendChild(personImage);

        let personPosition = document.createElement('h3');
        personPosition.textContent = team[teamMember][2];
        person.appendChild(personPosition);

        let personName = document.createElement('h2');
        personName.textContent = team[teamMember][1];
        person.appendChild(personName);

        let personContact = document.createElement('p');
        personContact.innerHTML = `${team[teamMember][3]}<br>${team[teamMember][4]}`;
        person.appendChild(personContact);

        people.appendChild(person);
    }

    $('#cred').innerHTML = 'People photos generated from <a href="https://this-person-does-not-exist.com/en">This Person Does Not Exist.</a>';
}