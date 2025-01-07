class Api {
    constructor(baseUrl, token) {
        this.baseUrl = baseUrl;
        this.token = token;
    }
    getinitialCard(){
        return fetch("https://around-api.es.tripleten-services.com/v1/cards/", {
                headers: {
                  authorization: this.token
                }
              })
              .then((response) => {
                if (response.ok) return response.json();
                  return Promise.reject('Error, algo salió mal')
                })
              .catch((err) => {
                console.log(err);
              });
    }

    getuserInfo(){
        return fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
            headers: {
              authorization: this.token
            }
          })
          .then((response) => {
            if (response.ok) return response.json();
              return Promise.reject('Error, algo salió mal')
            })
    }

    editUserInfo(userInfo){
        return fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
            method: "PATCH",
            headers: {
              authorization: this.token,
              "Content-Type": "application/json"
            },
            body: JSON.stringify((userInfo))
          }) 
          .then((response) => {
            if (response.ok) return response.json();
              return Promise.reject('Error, algo salió mal')
            })
    }

    createCard(cardInfo){
        return fetch("https://around-api.es.tripleten-services.com/v1/cards/", {
            method: "POST",
            headers: {
              authorization: this.token,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(cardInfo)
          })
          .then((response) => {
            if (response.ok) return response.json();
              return Promise.reject('Error, algo salió mal')
            })
    }

    deleteCard(cardId){
        return fetch(`https://around-api.es.tripleten-services.com/v1/cards/${cardId}`, {
            method: "DELETE",
            headers: {
              authorization: this.token,
              "Content-Type": "application/json"
            },
          })
          .then((response) => {
            if (response.ok) return response.json();
              return Promise.reject('Error, algo salió mal')
            })
    }
   
    likeCard(cardId){
        return fetch(`https://around-api.es.tripleten-services.com/v1/cards/${cardId}/likes`, {
            method: "PUT",
            headers: {
              authorization: this.token,
              "Content-Type": "application/json"
            },
          })
          .then((response) => {
            if (response.ok) return response.json();
              return Promise.reject('Error, algo salió mal')
            })
    }


    removeLikeCard(cardId){
        return fetch(`https://around-api.es.tripleten-services.com/v1/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: {
          authorization: this.token,
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
        if (response.ok) return response.json();
          return Promise.reject('Error, algo salió mal')
        })
    }

    editUserAvatar(userAvatar){
        return fetch("https://around-api.es.tripleten-services.com/v1/users/me/avatar", {
            method: "PATCH",
            headers: {
              authorization: this.token,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(userAvatar)
          })
          .then((response) => {
            if (response.ok) return response.json();
              return Promise.reject('Error, algo salió mal')
            })
          //.then(res => res.json()) //este .then devuelve la resouesta del servidor 
    }
}

const api = new Api("https://around-api.es.tripleten-services.com/v1/", "5768b5d1-dfc2-4a9f-8746-47869d6fb7f5");
export default api;