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
 import PopupWithConfirmation from './PopupWithConfirmation.js';
 import PopupWithForm from './PopupWithForm.js';
 import Section from './Section.js';
 import UserInfo from './UserInfo.js';
 import api from './api.js';
 console.log(api);
const profileEditButton = document.querySelector('.edit__button'); 
const profileAvatar = document.querySelector('.profile__image_edit');
const profileAddCardButton = document.querySelector('.add__button');
const formProfile = document.querySelector('#form-profile');
const formAddCard = document.querySelector('#form-cards');
const inputTitle = document.querySelector('#input-name');
const inputAbout = document.querySelector('#input-about');
const cardArea = document.querySelector('.cards');
const closeButtonCards = popupCards.querySelector('.popup__closed');
const closeButton = document.querySelector('.popup__closed'); 
const userInfo = new UserInfo('.profile__name', '.profile__about', '.profile__image');

const popupAvatar = new PopupWithForm ("#popup-avatar", (data) => {
api.editUserAvatar(data).then((result)=>{  
  userInfo.setProfileAvatar(result.avatar)
}) 
});

////-----------------  API Delete   -------------------------- 

const popupConfirmation = new PopupWithConfirmation("#popup-confirmation") ; 

/* function removeCard(idCard){
  popupConfirmation.open(() => {
    return api.deleteCard(idCard)
  });
} */

  
////-----------------  API createCards   --------------------------

const newpopupCards = new PopupWithForm("#popup-place", (data) => {
  api.createCard({name:data.title, link:data.link}).then((result)=>{                    
    const newCard = new Card(result, () => {
        newpopupImage.open(data.title, data.link,); 

// -----------------  API Like / no Like --------------------------
    }, ()=>{
     return api.likeCard(result._id)
    }, ()=>{
      return api.removeLikeCard(result._id)
    }
  );
    cardArea.prepend(newCard.getCard());
    closePopupCards();
    });
}); 
const newpopupImage = new PopupWithImage("#popup-image");

// -----------------  API editUserInfo  --------------------------

const newpopupProfile = new PopupWithForm ("#popup-profile", (data) => {
  api.editUserInfo(data).then((result)=>{                                                
    userInfo.setProfileValue(data.name, data.about, data.avatar);
    closePopupProfile();
  });
  console.log(data);
});

// -----------------  API getinitialCard  --------------------------

api.getinitialCard().then((result)=>{                                                    
  console.log(result);
  const cardSection = new Section({items:result, renderer:function (item){
    const newCard = new Card(item, ()=>{
        newpopupImage.open(item.name, item.link);
    }, ()=>{
      return api.likeCard(item._id);
    }, () =>{
      return api.removeLikeCard(item._id)
    }, (card)=>{
      popupConfirmation.open(() => {
      return api.deleteCard(item._id).then(()=>{
        card.remove(); 
        popupConfirmation.close();
      })
      });
    });
    cardSection.addItem(newCard.getCard());
  }}, '.cards')
  cardSection.render();
});

//-----------------  API getUserInfo  --------------------------

api.getuserInfo().then((result)=>{                                                          
  userInfo.setProfileValue(result.name, result.about);
  userInfo.setProfileAvatar(result.avatar);
}); 

// EVENT LISTENERS newpopup -------------------------------------------



newpopupProfile.setEventListeners();
newpopupCards.setEventListeners();
newpopupImage.setEventListeners();
popupAvatar.setEventListeners(); 
popupConfirmation.setEventListeners(); 
// popupConfirm.setEventListeners();


// VALIDATION FORMS ----------------------------------------------------

const validationProfileForm = new FormValidator(formProfile, settings);
validationProfileForm.enableValidation();

const validationCardForm = new FormValidator(formAddCard, settings);
validationCardForm.enableValidation();


// EVENTO CLICK PARA ABRIR POPUPS ---------------------------------------

profileAvatar.addEventListener('click',() => {
  popupAvatar.open();
});

profileEditButton.addEventListener('click', () => {
  newpopupProfile.open();
});
profileAddCardButton.addEventListener('click', () => {
  newpopupCards.open();
});

// BOTÓN CLOSE -------------------------------------------------------------------

closeButtonCards.addEventListener ('click', function(evt){
  evt.preventDefault();
  popupCards.classList.remove('popup__opened');  
});

closeButton.addEventListener('click', function(){ 
  popupProfile.classList.remove('popup__opened'); 
});

// .catch((err) => { 
  //console.log(err); 
// });
