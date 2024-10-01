export default class FormValidator {
    constructor(formElement, settings){
        console.log(formElement);
        this.formElement = formElement;
        this.settings = settings;
    }

    showInputError(inputElement, errorMessage){ //1:28:23
        console.log(errorMessage);
        const errorElement = this.formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this.settings.inputErrorClass);
        errorElement.textContent = errorMessage;
    }

    hideInputError(inputElement){
        const errorElement = this.formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this.settings.inputErrorClass);
        errorElement.textContent = ""; 
    }

    checkInputValidity(inputElement){
        console.log(inputElement);
        if(!inputElement.validity.valid){
            this.showInputError(inputElement, inputElement.validationMessage)
        } else{
            this.hideInputError(inputElement);
        }
    }

    toggleButtonState(){}
    setEventListeners(){
        this.inputList = Array.from(this.formElement.querySelectorAll(this.settings.inputSelector))
        this.inputList.forEach((inputElement) => {
            inputElement.addEventListener("input",()=>{
                this.checkInputValidity(inputElement);
                this.toggleButtonState(inputElement);
                })
            })
    }
     
    enableValidation(){
        console.log(this.formElement);
        this.formElement.addEventListener("submit", function(evt){
            evt.preventDefault();
        })
        this.setEventListeners();
    }
 }

 