
document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
  });
});

function openModal(){
  let modal= document.querySelector('#modal-window');
  modal.classList.add("showModal");
}

function closeM(){
    let m= document.querySelector('#modal-window');
  m.classList.remove("showModal");
}

document.getElementsByClassName('.mode-switch').onclick = function() {
  document.body.classList.toggle('dark');
}



const cards = document.querySelectorAll('.card-wrapper');

cards.forEach((card, index) => {
  const comments = card.querySelector('.card-wrapper-comment');
  card.addEventListener('click', () => {
    comments.style.display = 'block';
  });
});



