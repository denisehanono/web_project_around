const cardTemplate = document.querySelector("#card-template").content;

export default class Card {
    constructor(card, openPopupImage, handleLike, handleRemoveLike, confirm) {
        this.title = card.name;
        this.link = card.link;
        this.isLiked = card.isLiked;
        this.openPopupImage = openPopupImage;
        this.handleLike = handleLike;
        this.handleRemoveLike = handleRemoveLike;
        this.confirm = confirm;  
    }
    
       


    getTemplate(){
        return cardTemplate.querySelector(".card").cloneNode(true);
     }

    toggleLike(){ 
        if (this.isLiked){
        this.handleRemoveLike() 
        .then (()=>{
            this.isLiked = false; 
            this.cardButtonLike.classList.toggle("card__button_like");
        }) 
        } else {
            this.handleLike ()
        .then (()=>{
            this.cardButtonLike.classList.toggle("card__button_like");
            this.isLiked = true; 
        })
        }
// ____________ CONTADOR LIKES ___________________
        if(this.isLiked){
            this.htmlCard.querySelector(".card__counter").textContent = this.toggleLike.lenght;
            return this.node;
            }
            console.log(this.toggleLike); 
    }

    setEventListeners() {
        this.cardImage.addEventListener("click",() => {
            this.openPopupImage(this.title, this.link);
        });
        this.cardButtonLike.addEventListener("click",() => {
            this.toggleLike();
        });
        this.cardButtonDelete.addEventListener("click",() => {
            this.confirm(this.htmlCard)
        });
        /*

    this.cardButtonDelete.addEventListener("click",() => {
        this.confirm();
     });
    }
    removeCard()     
        this.htmlCard.remove(); 
*/ 

    }

    setProperties() {
        this.htmlCard = this.getTemplate();
        this.cardImage = this.htmlCard.querySelector(".card__image");       
        this.cardTitle = this.htmlCard.querySelector(".card__title");
        this.cardButtonLike = this.htmlCard.querySelector(".card__button");
        this.cardButtonDelete = this.htmlCard.querySelector(".button__delete");
        this.cardTitle.innerText = this.title;
        this.cardImage.src = this.link;
        if (this.isLiked){
            this.cardButtonLike.classList.add("card__button_like");
        };
        
    }

    getCard(){
        this.setProperties();
        this.setEventListeners();
        return this.htmlCard;
    }
}

/* Anterior: 

/*      this.node.querySelector(".card__counter").textContent = this.isLiked.lenght; 
   
  this.cardImage.addEventListener("click",() => {
            this.openPopupImage(this.title, this.link);
        });
    confirm (){
    if (this.confirm){


    this.cardButtonDelete.addEventListener("click",() => {
        this.confirm();
     });
    }
    removeCard()     
        this.htmlCard.remove(); 
*/ 
