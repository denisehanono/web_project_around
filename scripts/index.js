import Card from './card.js';
import FormValidator from './FormValidator.js'; 
import { 
  initialCards,
  popupProfile,
  popupCards,
  closePopupProfile,
  closePopupCards,
  settings,
 } from './utils.js';
 import Popup from './Popup.js';
 import PopupWithImage from './PopupWithImage.js';
 import PopupWithForm from './PopupWithForm.js';
 import Section from './Section.js';
 import UserInfo from './userInfo.js';
const profileEditButton = document.querySelector('.edit__button'); 
const profileAddCardButton = document.querySelector('.add__button');
const formProfile = document.querySelector('#form-profile');
const formAddCard = document.querySelector('#form-cards');
const inputTitle = document.querySelector('#input-name');
const inputAbout = document.querySelector('#input-about');
const cardArea = document.querySelector('.cards');
const closeButtonCards = popupCards.querySelector('.popup__closed');
const closeButton = document.querySelector('.popup__closed'); 
const newpopupProfile = new PopupWithForm ("#popup-profile");
const userInfo = new UserInfo('.profile__name', '.profile__about', '.profile__avatar');

// Esto GUARDA el popupProfile y lo cierra a través de UserInfo 

formProfile.addEventListener('submit', function(evt){
  evt.preventDefault();
  userInfo.setProfileValue(inputTitle.value, inputAbout.value);
  closePopupProfile();
});

// CARDS -------------------------------------------

const newpopupCards = new PopupWithForm("#popup-place", (data) => {
    const newCard = new Card(data.title, data.link, () => {
        newpopupImage.open(data.title, data.link); 
    });
    cardArea.prepend(newCard.getCard());
    closePopupCards();
}); 
const newpopupImage = new PopupWithImage("#popup-image");

// SECTION -------------------------------------------

const cardSection = new Section({items:initialCards, renderer:function (item){
  const newCard = new Card(item.name, item.link, ()=>{
      newpopupImage.open(item.name, item.link);
  } );
  cardSection.addItem(newCard.getCard());
}}, '.cards')
cardSection.render();

// EVENT LISTENERS newpopup -------------------------------------------

newpopupProfile.setEventListeners();
newpopupCards.setEventListeners();
newpopupImage.setEventListeners();

// VALIDATION FORMS ----------------------------------------------------

const validationProfileForm = new FormValidator(formProfile, settings);
validationProfileForm.enableValidation();

const validationCardForm = new FormValidator(formAddCard, settings);
validationCardForm.enableValidation();


// EVENTO CLICK PARA ABRIR POPUPS ---------------------------------------


profileEditButton.addEventListener('click', () => {
  newpopupProfile.open();
});
profileAddCardButton.addEventListener('click', () => {
  newpopupCards.open();
});

// CLOSE -------------------------------------------------------------------

closeButtonCards.addEventListener ('click', function(evt){
  evt.preventDefault();
  popupCards.classList.remove('popup__opened');  
});

closeButton.addEventListener('click', function(){ 
  popupProfile.classList.remove('popup__opened'); 
});

//-------------------------------------------------
//-------------------------------------------------

// INITIAL CARDS -------------------------------------------
/*
initialCards.forEach(function (item){
  const newCard = new Card(item.name, item.link, ()=>{
      newpopupImage.open(item.name, item.link);
  } );
  cardArea.append(newCard.getCard()); //cardArea ahora es Section
});
*/


/*
    newpopupCards.addEventListener('submit', function(event){
      event.preventDefault();
      profileTitle.textContent = data.name;
      profileAbout.textContent = data.about;  
      popupProfile.classList.remove('popup__opened');
    });


formProfile.addEventListener('submit', function(event){
  event.preventDefault();
  profileTitle.textContent = data.name;
  profileAbout.textContent = data.about;  
  popupProfile.classList.remove('popup__opened');
});

    const buttonDelete = card.querySelector('.button__delete'); 
    buttonDelete.addEventListener('click', function(){
        card.remove();
    });

    const buttonLike = card.querySelector('.card__button_like'); 
    buttonLike.addEventListener('click', function(){
        buttonLike.classList.toggle('card__button_like'); 
    }); 


// Esto GUARDA el popupProfile y lo cierra 
formProfile.addEventListener('submit', function(event){
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;  
  popupProfile.classList.remove('popup__opened');
});




}; */