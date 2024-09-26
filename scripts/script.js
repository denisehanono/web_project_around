const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
  ];

import Card from './card.js';
const popupProfile = document.querySelector('#popup-profile');
const formProfile = document.querySelector('#form-profile');
const popupCards = document.querySelector('#popup-place'); 
const profileTitle = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const inputName = document.querySelector('#input-name');
const inputAbout = document.querySelector('#input-about');
const editButton = document.querySelector('.edit__button'); 
const cardArea = document.querySelector('.cards');
const popupPlaceAddButton = document.querySelector('.add__button');
const submitButtonCards = popupCards.querySelector('.submit__button');
const popupImage = document.querySelector('#popup-image');
const closeButtonCards = popupCards.querySelector('.popup__closed');
const closeButton = document.querySelector('.popup__closed'); 
const cardTemplate = document.querySelector('#card-template').content;

popupPlaceAddButton.addEventListener('click', function(){ 
    popupCards.classList.add('popup__opened'); 
});

editButton.addEventListener('click', function(){
    popupProfile.classList.add('popup__opened');
});

closeButtonCards.addEventListener ('click', function(evt){
    evt.preventDefault();
    popupCards.classList.remove('popup__opened');  
});

closeButton.addEventListener('click', function(){ 
    popupProfile.classList.remove('popup__opened'); 
});

formProfile.addEventListener('submit', function(event){
    event.preventDefault();
    profileTitle.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;  
    popupProfile.classList.remove('popup__opened');
});

submitButtonCards.addEventListener('click', function(evt){
    evt.preventDefault();
    const inputTitle = document.querySelector('#input-title');
    const inputLink = document.querySelector('#input-link');
    createCard(inputTitle.value, inputLink.value); 
    popupCards.classList.remove('popup__opened'); 
});

initialCards.forEach(function (item){
    const newCard = new Card(item.name, item.link);
    cardArea.append(newCard.getCard());
});

// ?? está transparente
function openPopupCards(){  
    popupCards.classList.add('popup__opened');
};

function createCard(title, link){ 
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    const cardImage = card.querySelector(".card__image"); 
    const cardTitle = card.querySelector(".card__title");
    cardTitle.textContent = title;
    cardImage.src = link; 
    cardImage.addEventListener('click', function(){}); 
    cardArea.prepend(card);

    const buttonDelete = card.querySelector('.button__delete'); 
    buttonDelete.addEventListener('click', function(){
        card.remove();
    });

    const buttonLike = card.querySelector('.card__button_like'); 
    buttonLike.addEventListener('click', function(){
        buttonLike.classList.toggle('card__button_active'); 
    }); 

    cardImage.addEventListener('click', function(){
        popupImage.classList.add('popup__opened');
        popupImage.querySelector('.popup__image').src = link;
        popupImage.querySelector('.popup__title_image').textContent = title;
        popupImage.querySelector('.popup__closed_img').addEventListener('click', function(){
            popupImage.classList.remove('popup__opened');
        });
    });
};

const closeOnEsc =(evt) => {
    if(evt.key === 'Escape') {
      popupCards.classList.remove('popup__opened');
      popupProfile.classList.remove('popup__opened');
      popupImage.classList.remove('popup__opened');
     }
  }

document.addEventListener("keydown", closeOnEsc);

// Error ?
const nombreCard = new Card("nombre", "Foto");
nombreCard.setProperties();
console.log(nombreCard.title);
console.log(nombreCard.link);