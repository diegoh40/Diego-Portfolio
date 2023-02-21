// Mobil-menu//
function menuClose(opc) {
  if (opc) {
    const mmenu = document.querySelector('#mobile_menu');
    mmenu.style.display = 'none';
  }
}

function menuOpen(opc = false) {
  if (opc) {
    const mmenu = document.querySelector('#mobile_menu');
    mmenu.style.display = 'block';
  }
}

// popup-window //

const works = [
 
  {
    project: 'Conference Avengers page  Bogotá 2022',
    description: 'In this capstone a page of a conference is presented, using creativity we include our own ideas for the conference to customize the project, we implemented all the concepts seen in the module, HTML, CSS, DOM, JS Objects.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'JS'],
    image: 'proj1.png',
    link: 'https://diegoh40.github.io/Capstone-Avengers_conference/',
    source: 'https://github.com/diegoh40/Capstone-Avengers_conference',
  },
  {
    project: 'X-Travel',
    description: 'This is a workgroup that manages the real live data from the SpaceX API. We built a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    languages: ['HTML', 'CSS', 'React', 'Redux'],
    image: 'proj2.png',
    link: 'https://x-trav.netlify.app/',
    source: 'https://github.com/Mov305/Space-x',
  },
  {
    project: 'Countries Details',
    description: 'This React capstone project is about building a mobile webapp to check a list of metrics (numerical values) that I have created making use of React and Redux. I have selected an API that provides numerical data on a topic that I like and built the webapp around it.',
    languages: ['HTML', 'CSS', 'react', 'redux'],
    image: 'proj3.png',
    link: 'https://diegoh40-makes-great-sites.netlify.app/',
    source: 'https://github.com/diegoh40/countries-webapp',
  },
  
  {
    project: 'Movies App',
    description: 'This JavaScript capstone project is built on the TVMAZE API, an external API. The cards display the movies information that was retrieved from the API. The user has the option to like and comment on the movies cards.',
    languages: ['HTML', 'CSS', 'react', 'redux'],
    image: 'proj4.png',
    link: 'https://creative-snickerdoodle-94ec3b.netlify.app/',
    source: 'https://github.com/diegoh40/capestone-II',
  },
  {
    project: 'Bookstore ',
    description: 'The Bookstore is a website I created an MVP version that allows you (CRUD) Display a list of books,  add a book, update and remove a selected book.',
    languages: ['HTML', 'CSS', 'react', 'redux'],
    image: 'proj5.png',
    link: 'https://diegoh40.github.io/Awesome-Books-ES6/#',
    source: 'https://github.com/diegoh40/bookstore',
  },
  {
    project: ' Blue Dream Yatch Booking App',
    description: 'Blue Dream Yatch Booking Frontend App is an application where the user can register new accounts, login and reserve a set of differents Yatchs. This project has been built using React/Redux that will be connected with Rails in the backend.',
    languages: ['bootstrap','ruby', 'rails', 'react', 'redux', 'postgresql'],
    image: 'proj6.png',
    link: 'https://develop.d394vyctawdkiv.amplifyapp.com/',
    source: 'https://github.com/diegoh40/blue-dreams-front-end',
  },
];

const loadProjects = () => {
  let showProjects = '';
  for (let i = 0; i < works.length; i += 1) {
    let listTech = '';
    works[i].languages.forEach((elem) => { listTech += `<li>${elem}</li>`; });
    showProjects += `<div class="col-12 col-md-4 mb-3">
      <article style="background-image: url('images2/${works[i].image}')">
        <div class="article-info"  >
          <h4>${works[i].project}</h4>
          <!--<p class="text-white">${works[i].description}</p>-->
          <ul class="languages m-0 p-0">${listTech}</ul>
        </div>
        <div class="article-button">
          <button type="button" class="w-100" data-bs-toggle="modal" data-bs-target="#popupModal" data-bs-whatever="${i}">
            See Project
          </button>
        </div>                
      </article>
    </div>`;

    document.getElementById('projectList').innerHTML = showProjects;
  }
};

const exampleModal = document.getElementById('popupModal');

exampleModal.addEventListener('show.bs.modal', (event) => {
  const button = event.relatedTarget;
  console.log(button, 'sss');
  const idnum = button.getAttribute('data-bs-whatever');

  const buttons = `<div class="btn">
  <div class="row">  
  <a href="${works[idnum].link}" class="col me-2" target="_blank">
    <button type="button" class="icon" > See Live  </button>
  </a>
  <a href="${works[idnum].source}" class="col me-2" target="_blank">
    <button type="button" class="icon"alt="GitHub Social" > Source  </button>
  </a>
  </div>
  </div>`;
  let listTech = '';

  works[idnum].languages.forEach((elem) => { listTech += `<li>${elem}</li>`; });

  const modalTitle = exampleModal.querySelector('.modal-title');

  modalTitle.innerHTML = works[idnum].project;

  document.getElementById('popup_image').src = `./images2/${works[idnum].image}`;
  document.getElementById('popup_description').innerHTML = works[idnum].description + buttons;
  document.getElementById('popup_tech').innerHTML = listTech;
});

/* // form-validation// */

const form = document.getElementById('contactForm');
const email = document.getElementById('email');
const alert = document.getElementById('alertWin');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailRegex = /[a-z]+[@].[a-z]+.[a-z]{2,3}/;

  const emailVal = email.value.trim();

  if (email.value === '') {
    alert.innerHTML = 'Field is empty.';
  } else if (emailRegex.test(emailVal)) {  
    alert.innerHTML = ' Use only lowercase in email field.';
  } else {
    form.submit();
    
  }
});

// Storage Data//

const getInfo = () => {
  const storeInfo = JSON.parse(localStorage.getItem('storeInfo'));

  if (storeInfo) {
    document.getElementById('name').value = storeInfo.name;
    document.getElementById('email').value = storeInfo.email;
    document.getElementById('message').value = storeInfo.message;
  }
};

form.addEventListener('keyup', () => {
  const storeInfo = {
    first_name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  localStorage.setItem('storeInfo', JSON.stringify(storeInfo));
}, true);

menuOpen();// menu header
menuClose();// menu header
loadProjects(); // Works
getInfo();// storage
