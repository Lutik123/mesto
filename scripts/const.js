const initialCards = [ 
    { 
      name: "Архыз", 
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg", 
    }, 
    { 
      name: "Челябинская область", 
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg", 
    }, 
    { 
      name: "Иваново", 
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg", 
    }, 
    { 
      name: "Камчатка", 
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg", 
    }, 
    { 
      name: "Холмогорский район", 
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg", 
    }, 
    { 
      name: "Байкал", 
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg", 
    },   
  ];

const obj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_invalid',
    inputErrorClass: 'popup__input_type_error',//1
    errorClass: 'popup__error_visible'//2
  };
  
const cardConfig = {
    cardElement: '.element',
    picElement: '.element__image',
    textElement: '.element__title',
    likeElement: '.element__button',
    trashElement: '.element__button-trash',
    likeElementActive: 'element__button-active'
}
export {initialCards,obj,cardConfig};