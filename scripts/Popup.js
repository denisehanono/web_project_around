export default class Popup {
    constructor(popupSelector) {
        this.popupElement = document.querySelector(popupSelector);
        this.closeButton = this.popupElement.querySelector('.popup__closed');
        this._handleEscClose = this._handleEscClose.bind(this);
    }  

    open (){
        this.popupElement.classList.add('popup__opened');
        document.addEventListener("keydown", this._handleEscClose)
    }
    close (){
        this.popupElement.classList.remove('popup__opened');
        document.removeEventListener("keydown", this._handleEscClose)
    }

    _handleEscClose (evt){
        if(evt.key === 'Escape') {
            this.close();
           }
    }

    handleClickOutside(evt){  
        return (evt.target.classList.contains("popup__opened"))
    }

    setEventListeners(){
        this.closeButton.addEventListener("click", ()=>{
            this.close();
        })
        // addEventListener es un método del DOM y recibe como segundo parametro
        // un **callback**
        this.popupElement.addEventListener("click", (evt) => {
            if (this.handleClickOutside(evt)) {
                this.close();
            }
        })
    }
}