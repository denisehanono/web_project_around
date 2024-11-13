const cardTemplate = document.querySelector("#card-template").content;

export default class Card {
    constructor(title, link, openPopupImage) {
        this.title = title;
        this.link = link;
        this.openPopupImage = openPopupImage;
    }
    
    getTemplate(){
        return cardTemplate.querySelector(".card").cloneNode(true);
    }


    removeCard() {
        this.htmlCard.remove();
    }

    toggleLike() {
        this.cardButtonLike.classList.toggle("card__button_like");
    }

    setEventListeners() {
        this.cardImage.addEventListener("click",() => {
            this.openPopupImage(this.title, this.link);
        });
        this.cardButtonLike.addEventListener("click",() => {
            this.toggleLike();
        });
        this.cardButtonDelete.addEventListener("click",() => {
            this.removeCard();
        });
    }

    setProperties() {
        this.htmlCard = this.getTemplate();
        this.cardImage = this.htmlCard.querySelector(".card__image");
        this.cardTitle = this.htmlCard.querySelector(".card__title");
        this.cardButtonLike = this.htmlCard.querySelector(".card__button");
        this.cardButtonDelete = this.htmlCard.querySelector(".button__delete");
        this.cardTitle.innerText = this.title;
        this.cardImage.src = this.link;
    }

    getCard(){
        this.setProperties();
        this.setEventListeners();
        return this.htmlCard;
    }
}

