export const popupProfile = document.querySelector('#popup-profile');
export const popupCards = document.querySelector('#popup-place'); 
export const popupImage = document.querySelector('#popup-image');
const popupImageSrc = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__title_image');
export const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".submit__button",
  inactiveButtonClass: ".submit__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
};


const closeOnEsc =(evt) => {
  if(evt.key === 'Escape') {
    closePopupCards();
    closePopupProfile();
    closePopupImage();
   }
}

export function openPopupCards(){  
    popupCards.classList.add('popup__opened');
    document.addEventListener("keydown", closeOnEsc);
};

export function closePopupCards(){
    popupCards.classList.remove('popup__opened');
    document.removeEventListener("keydown", closeOnEsc);
};

export function openPopupProfile(){
    popupProfile.classList.add('popup__opened');
    document.addEventListener("keydown", closeOnEsc);
};

export function closePopupProfile(){
    popupProfile.classList.remove('popup__opened');
    document.removeEventListener("keydown", closeOnEsc);
};

export function openPopupImage(title,link){
    popupImage.classList.add('popup__opened');
    popupImageTitle.textContent = title;
    popupImageSrc.src = link;
    document.addEventListener("keydown", closeOnEsc);
};

export function closePopupImage(){
    popupImage.classList.remove('popup__opened');
    document.removeEventListener("keydown", closeOnEsc);
};


export const initialCards = [
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
