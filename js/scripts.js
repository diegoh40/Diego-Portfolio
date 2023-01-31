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
    project: 'The Beatles',
    description: 'The Beatles were an English rock band, formed in Liverpool in 1960, that comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr.',
    languages: ['HTML', 'CSS', 'JS', 'Bootstrap'],
    image: 'beatles.jpg',
    link: 'http://www.beatles.com',
    source: 'https://github.com/diegoh40',
  },
  {
    project: 'CREATING HIGH-PERFORMANCE TEAMS CONFERENCE BOGOTÁ 2022',
    description: 'In this capstone a page of a conference is presented, using creativity we include our own ideas for the conference to customize the project, we implemented all the concepts seen in the module, HTML, CSS, DOM, JS Objects.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP'],
    image: 'proj1.png',
    link: 'http://www.therollingstones.com',
    source: 'https://github.com/diegoh40',
  },
  {
    project: 'Pink Floyd',
    description: 'Pink Floyd is famous for being an English rock band first formed in London in 1965.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
    image: 'beatles.jpg',
    link: 'http://www.pinkfloyd.com',
    source: 'https://github.com/diegoh40',
  },
  {
    project: 'Led Zeppelin',
    description: 'Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
    image: 'beatles.jpg',
    link: 'http://www.ledzeppelin.com',
    source: 'https://github.com/diegoh40',
  },
  {
    project: 'The Who',
    description: 'The Who are an English rock band formed in London in 1964. Their classic lineup consisted of lead singer Roger Daltrey, guitarist and singer Pete Townshend.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
    image: 'beatles.jpg',
    link: 'http://www.thewho.com',
    source: 'https://github.com/diegoh40',
  },
  {
    project: 'U2',
    description: 'U2, Irish postpunk band that by the end of the 1980s had established itself not only as one of the most popular music bands.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
    image: 'beatles.jpg',
    link: 'http://www.u2.com',
    source: 'https://github.com/diegoh40',
  },
  {
    project: 'The Doors',
    description: 'The Doors, American band that, with a string of hits in the late 1960s and early 70s, was the creative vehicle for singer Jim Morrison.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery'],
    image: 'beatles.jpg',
    link: 'http://www.thedoors.com/',
    source: 'https://github.com/diegoh40',
  },
];

const loadProjects = () => {
  let showProjects = '';

  for (let i = 1; i < works.length; i += 1) {
    let listTech = '';

    works[i].languages.forEach((elem) => { listTech += `<li>${elem}</li>`; });

    showProjects += `<div class="col-12 col-md-4 mb-3">
      <article>
        <div class="article-info">
          <h4>${works[i].project}</h4>
          <p class="text-white">${works[i].description}</p>
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
  const idnum = button.getAttribute('data-bs-whatever');

  /*
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.

  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
  */

  const buttons = `<div class="btn">
  <div class="row">
  <button type="button" class="col me-2">See Live <img class="icon" src="images2/flecha.png" alt="GitHub Social" />
  </button><button class="col me-2" type="button">See Source<img class="icon" src="images2/github.png" alt="GitHub Social" />
  </button></div>
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
