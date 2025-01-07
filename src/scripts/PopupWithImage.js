import Popup from "../scripts/Popup.js"; 

// extends es herencia
export default class PopupWithImage extends Popup {
    constructor (popupSelector){
        super(popupSelector)
        this.imageElement = this.popupElement.querySelector('.popup__image');
        this.titleElement = this.popupElement.querySelector('.popup__title_image');
    }
    open(name, link){
        console.log(name, link);
        // polimorfismo
        super.open();
        this.titleElement.textContent = name;
        this.imageElement.src = link;
    }
}