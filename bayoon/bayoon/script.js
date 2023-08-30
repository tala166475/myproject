
const cards = document.querySelectorAll('.card-wrapper');

cards.forEach((card, index) => {
  const comments = card.querySelector('.card-wrapper-comment');
  card.addEventListener('click', () => {
    comments.style.display = 'block';
  });
});



const select = document.getElementById('filter-select');

select.addEventListener('change', () => {
  const selectedFilter = select.value;
  
  cards.forEach((card, index) => {
    if (selectedFilter === "all" || card.dataset.filter === selectedFilter) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});



      
      
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






const cardItems = document.querySelectorAll('.main-card');
const modalHeader = document.querySelector('.modalHeader-js');
const modalCardPrice = document.querySelector('.amount');
const modalCardAddress = document.querySelector('.map');
const modalCardRate = document.querySelector('.star');


cardItems.forEach((cardItem) => {
  cardItem.addEventListener('click', function () {
    const cardHeader = cardItem.querySelector('.cardText-js');
    const cardPrice = cardItem.querySelector('.card-price');
    const cardAddress = cardItem.querySelector('.address');
    const cardRate = cardItem.querySelector('.rate');

    modalHeader.innerText = cardHeader.innerText;
    modalCardPrice.innerText = cardPrice.innerText;
    modalCardAddress.innerText = cardAddress.innerText;
    modalCardRate.innerText = cardRate.innerText;
  });
});

window.onkeydown = function (event) {
  if(event.keyCode == 20) {
    closeM();
  }
}

var modal =  document.querySelector('#modal-window');
window.onclick = function (event) {
  if(event.target == modal) {
    closeM();
  }
}



