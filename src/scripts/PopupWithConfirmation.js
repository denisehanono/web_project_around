import Popup from "../scripts/Popup.js";

export default class PopupWithConfirmation extends Popup{
    constructor(popupSelector) {
        super(popupSelector)
    }

    open(handlerSubmit){
    super.open();
    this.handlerSubmit = handlerSubmit;
    }
    
    setEventListeners() {
        super.setEventListeners();
        this.popupElement.querySelector('.submit__button').addEventListener('click', () => {
        this.handlerSubmit();
        })
    }
}
   