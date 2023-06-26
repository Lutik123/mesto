import {Card} from './Card.js';
import {FormValidator} from './form.js';
import {initialCards,obj,cardConfig} from './const.js';
//const popupPic = document.querySelector(".popup_pic");


 
const popupOpenButtonEdit = document.querySelector(".profile__button-edit"); 
const popupThemeEdit = document.querySelector(".popup_theme_edit"); 
//const popupCloseButtonEdit = document.querySelector(".popup__close"); 
const inputName = document.querySelector(".popup__input_theme_name"); 
const inputHoby = document.querySelector(".popup__input_theme_hoby"); 
const profileTitle = document.querySelector(".profile__title"); 
const profileSubtitle = document.querySelector(".profile__subtitle"); 
const buttonOpenAddPlacePopup = document.querySelector(".profile__add-button"); 
const popupNewPlace = document.querySelector(".popup_new_form"); 
//const popupCloseButtonFormPic = document.querySelector(".popup__close_new_form"); 
const cardsContainer = document.querySelector(".elements"); 
//const cardsTemplate = document.querySelector("#template-cards").content; 
const popupFormEdit = document.querySelector(".popup__form_theme_edit"); 
const popupFormNewPic = document.querySelector(".popup__form_new_pic"); 
const popupInputThemeNamePic = document.querySelector(".popup__input_theme_name-pic"); 
const popupInputThemePic = document.querySelector(".popup__input_theme_pic"); 
//const popupImageOpen = document.querySelector(".element__image"); 
//const popupImage = document.querySelector(".popup__image"); 
//const popupPicClose = document.querySelector(".popup__close_theme_pic"); 
const popups = document.querySelectorAll(".popup");
const popupMistakes = document.querySelectorAll('.popup__error')
const popupInputTypeErrors = document.querySelectorAll('.popup__input');
const buttonsSubmit = document.querySelectorAll('.popup__submit');
const closeButtons = document.querySelectorAll('.popup__close');
const popupElement = document.querySelector('.popup_pic');
const popupImage = document.querySelector('.popup__image');
//const popupCloseButton = document.querySelector('.popup__close_theme_pic');
const popupTitlePic = document.querySelector(".popup__title-pic");
//const like = document.querySelector('.element__button');
 //enableValidation(obj);


const formValidatorEl = new FormValidator(obj,popupFormEdit);
//formValidatorEl.enableValidation();
const formValidatorEl2 = new FormValidator(obj,popupFormNewPic);
//formValidatorEl2.enableValidation();



function openPopup (openPopup) {
  openPopup.classList.add("popup_opened");
  document.addEventListener('keydown',closeByEscape);
}
function closePopup (closePopup) {
  closePopup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEscape);
}
function cleerMistake (Mistakes,popupInputTypeErr) {
  
  Mistakes.forEach(function(mistake){
    mistake.textContent = '';
  });
  popupInputTypeErr.forEach(function (inputMistakes){
    inputMistakes.classList.remove('popup__input_type_error')
  });
}
function openProfilePopup () { 
  openPopup(popupThemeEdit);
  inputName.value = profileTitle.textContent; 
  inputHoby.value = profileSubtitle.textContent; 
  cleerMistake(popupMistakes,popupInputTypeErrors);
  formValidatorEl.enableValidation();
}
 
function handleProfileFormSubmit(event) { 
  event.preventDefault (); 
  profileTitle.textContent = inputName.value; 
  profileSubtitle.textContent = inputHoby.value;  
  closePopup(popupThemeEdit);
}  
 
function openPopupNewPlace() { 
  popupInputThemeNamePic.value = ""; 
  popupInputThemePic.value = "";  
  openPopup(popupNewPlace);
  cleerMistake(popupMistakes,popupInputTypeErrors);
  buttonsSubmit.forEach(function(buttonChange){
    buttonChange.setAttribute('disabled',true);
    buttonChange.classList.add('popup__submit_invalid');
  });
  formValidatorEl2.enableValidation();
} 

function handleCardFormSubmit(evt) { 
  const objk = {
    name: popupInputThemeNamePic.value, 
    link: popupInputThemePic.value, 
   }

  evt.preventDefault(); 
  const  card  = createCard(objk) ;
  cardsContainer.prepend(card);  
  closePopup(popupNewPlace);
  evt.target.reset();
} 


initialCards.forEach((initial) => {
  const card = new Card(initial,'#template-cards',cardConfig,showPicture);
  const cardElement = card.generateCard();
  
  //openPopup(popupPic);
  // Добавляем в DOM
  document.querySelector('.elements').append(cardElement);
  
});

function createCard (data) {
const cardContent = new Card(data,'#template-cards',cardConfig,showPicture);
const cardElement = cardContent.generateCard();
return cardElement;
}


closeButtons.forEach((button) => {

  const popup = button.closest('.popup');

  button.addEventListener('click', () => closePopup(popup));
});

 popups.forEach(function(popupClose){
  popupClose.addEventListener('click',(evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popupClose);
      cleerMistake(popupMistakes,popupInputTypeErrors);
    }
  })
});
 function closeByEscape (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
    cleerMistake(popupMistakes,popupInputTypeErrors);
  }
};
function showPicture (name,link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupTitlePic.textContent = name;
  popupElement.classList.add("popup_opened");
  openPopup(popupElement);
}
popupFormEdit.addEventListener("submit", handleProfileFormSubmit); 
popupOpenButtonEdit.addEventListener("click", openProfilePopup); 
buttonOpenAddPlacePopup.addEventListener("click", openPopupNewPlace); 
popupFormNewPic.addEventListener("submit", handleCardFormSubmit); 












