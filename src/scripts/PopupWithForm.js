import Popup from "../scripts/Popup.js"; 

export default class PopupWithForm extends Popup {
    // handlerSubmit es una función
    constructor(popupSelector, handlerSubmit) {
        super(popupSelector)
        // callback
        this.handlerSubmit = handlerSubmit;
    }

    _getInputValues() {
        // variables auxiliares
        const response = {}

        const array = Array.from(this.popupElement.querySelectorAll('.form__input'));

        array.forEach((item) => {
            response[item.name] = item.value
        })

        return response
        //  data[form__input.name] = form__input.value;
    }
    // es buscar todos los inputs que hay dentro de tu formalurio
    
    setEventListeners() {
        super.setEventListeners();

        const formElement = this.popupElement.querySelector('.form')

        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            this.handlerSubmit(this._getInputValues());
        })

    }
}