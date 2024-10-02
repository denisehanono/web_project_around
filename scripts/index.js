import Card from './card.js';
import FormValidator from './FormValidator.js'; 
import { 
  initialCards,
  popupProfile,
  popupCards,
  openPopupProfile,
  closePopupProfile,
  openPopupCards,
  closePopupCards,
  openPopupImage,
  closePopupImage, 
  popupImage,
  settings
 } from './utils.js';
 

const profileEditButton = document.querySelector('.edit__button'); 
const profileAddCardButton = document.querySelector('.add__button');
const formProfile = document.querySelector('#form-profile');
const formAddCard = document.querySelector('#form-cards');
const profileTitle = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const inputTitle = document.querySelector('#input-name');
const inputAbout = document.querySelector('#input-about');
const cardArea = document.querySelector('.cards');
const submitButtonCards = popupCards.querySelector('.submit__button');
const closeButtonCards = popupCards.querySelector('.popup__closed');
const closeButtonImage = popupImage.querySelector('.popup__closed_img');
const closeButton = document.querySelector('.popup__closed'); 
const cardTemplate = document.querySelector('#card-template').content;


initialCards.forEach(function (item){
    const newCard = new Card(item.name, item.link, openPopupImage);
    cardArea.append(newCard.getCard());
});

const validationProfileForm = new FormValidator(formProfile, settings);
validationProfileForm.enableValidation();

const validationCardForm = new FormValidator(formAddCard, settings);
validationCardForm.enableValidation();

formAddCard.addEventListener('submit', function(evt){
  evt.preventDefault();
  const newCard = new Card(inputCardTitle.value, inputCardLink.value);
  cardArea.append(newCard.getCard());
  closePopupCards();
});
profileEditButton.addEventListener('click',openPopupProfile);
profileAddCardButton.addEventListener('click', openPopupCards);
closeButtonImage.addEventListener('click', closePopupImage);


formProfile.addEventListener('submit', function(evt){
  evt.preventDefault();
  profileTitle.textContent = inputTitle.value;
  profileAbout.textContent = inputAbout.value;  
  closePopupProfile();
});
document.addEventListener("click", function (evt) {;
if (evt.target.classList.contains('popup__opened')) {
  closePopupCards();
  closePopupProfile();
  closePopupImage();
}
});

//Hasta aquí todo bien

/*
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
        buttonLike.classList.toggle('card__button_like'); 
    }); 

    cardImage.addEventListener('click', function(){
        popupImage.classList.add('popup__opened');
        popupImage.querySelector('.popup__image').src = link;
        popupImage.querySelector('.popup__title_image').textContent = title;
        popupImage.querySelector('.popup__closed_img').addEventListener('click', function(){
        popupImage.classList.remove('popup__opened');
        });
    });
}; */ 


profileAddCardButton.addEventListener('click', function(){ 
  popupCards.classList.add('popup__opened'); 
});

profileEditButton.addEventListener('click', function(){
  popupProfile.classList.add('popup__opened');
});

closeButtonCards.addEventListener ('click', function(evt){
  evt.preventDefault();
  popupCards.classList.remove('popup__opened');  
});

closeButton.addEventListener('click', function(){ 
  popupProfile.classList.remove('popup__opened'); 
});


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
      buttonLike.classList.toggle('card__button_like'); 
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


initialCards.forEach(function (item){
  const newCard = new Card(item.name, item.link);
  cardArea.append(newCard.getCard());
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



