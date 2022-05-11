const works = [
  {
    project: 'The Beatles',
    description: 'The Beatles were an English rock band, formed in Liverpool in 1960, that comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP'],
    image: 'beatles.jpg',
    link: 'http://www.',
    source: 'https://github.com/diegoh40',
  },
  {
    project: 'The Rolling Stones',
    description: 'The Rolling Stones are a British rock group, formed in 1962, that drew on Chicago blues stylings to create a unique vision of the dark side of post-1960s counterculture.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP'],
    image: 'beatles.jpg',
    link: 'http://www.',
    source: 'https://github.com/diegoh40',
  },
  {
    project: 'Pink Floyd',
    description: 'Pink Floyd is famous for being an English rock band first formed in London in 1965.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
    image: 'beatles.jpg',
    link: 'http://www.',
    source: 'https://github.com/diegoh40',
  },
  {
    project: 'Led Zeppelin',
    description: 'Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
    image: 'beatles.jpg',
    link: 'http://www.',
    source: 'https://github.com/diegoh40',
  },
  {
    project: 'The Who',
    description: 'The Who are an English rock band formed in London in 1964. Their classic lineup consisted of lead singer Roger Daltrey, guitarist and singer Pete Townshend.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
    image: 'beatles.jpg',
    link: 'http://www.',
    source: 'https://github.com/diegoh40',
  },
  {
    project: 'U2',
    description: 'U2, Irish postpunk band that by the end of the 1980s had established itself not only as one of the most popular music bands.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery', 'PHP', 'MySQL'],
    image: 'beatles.jpg',
    link: 'http://www.',
    source: 'https://github.com/diegoh40',
  },
  {
    project: 'The Doors',
    description: 'The Doors, American band that, with a string of hits in the late 1960s and early 70s, was the creative vehicle for singer Jim Morrison.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'Jquery'],
    image: 'beatles.jpg',
    link: 'http://www.hosterialafama.cl/',
    source: 'https://github.com/diegoh40',
  },
];

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
/*
function openModal(id) {
  console.log(id);
  //$('#popupModal').modal('show');
  popupModal.show()
}
*/

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

  const buttons = '<div class="btn"><div class="row"><button type="button" class="col me-2">See Live <img class="icon" src="images2/flecha.png" alt="GitHub Social" /></button><button class="col me-2" type="button">See Source<img class="icon" src="images2/github.png" alt="GitHub Social" /></button></div></div>';
  let listTech = '';

  works[idnum].languages.forEach((elem) => { listTech += `<li>${elem}</li>`; });

  const modalTitle = exampleModal.querySelector('.modal-title');

  modalTitle.innerHTML = works[idnum].project;

  document.getElementById('popup_image').src = `./images2/bandas/${works[idnum].image}`;
  document.getElementById('popup_description').innerHTML = works[idnum].description + buttons;
  document.getElementById('popup_tech').innerHTML = listTech;
});

menuOpen();
menuClose();
loadProjects();