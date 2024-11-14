import Popup from "./Popup.js"; 

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

    setEventListeners() {
        super.setEventListeners();

        const formElement = this.popupElement.querySelector('.form__input')

        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            this.handlerSubmit(this._getInputValues());
        })

        // this.popupElement.querySelector('buscar el form dentro del popup')
        // con ese popup hacer popupForm.addEventLister('submit', () => {})

        // escuchar el evento submit del formulario y ejectuar el this.handlerSubmit
        // pasandole como argumento la salida de la ejecución del método
        // _getInputValues
        // this.popupElement.querySelector('buscar el form dentro del popup')
        // con ese popup hacer popupForm.addEventLister('submit', () => {})
    }
}


    // es buscar todos los inputs que hay dentro de tu formalurio
    // hint: usamos el Array.from(this.popupElement.querySelectorAll(''))
    // hint: forEach de la lista anterior y asignar cada elemento el valor y el nombre del input en el objeto data
   /*
        array.forEach((inputElement) => {
            data[inputElement.name] = inputElement.value
        })
         */
        // retornar en un objeto los valores de esos inputs
        // return data