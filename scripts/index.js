
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
 
const popupOpenButtonEdit = document.querySelector(".profile__button-edit"); 
const popupThemeEdit = document.querySelector(".popup_theme_edit"); 
const popupCloseButtonEdit = document.querySelector(".popup__close"); 
const inputName = document.querySelector(".popup__input_theme_name"); 
const inputHoby = document.querySelector(".popup__input_theme_hoby"); 
const profileTitle = document.querySelector(".profile__title"); 
const profileSubtitle = document.querySelector(".profile__subtitle"); 
const buttonOpenAddPlacePopup = document.querySelector(".profile__add-button"); 
const popupNewPlace = document.querySelector(".popup_new_form"); 
const popupCloseButtonFormPic = document.querySelector(".popup__close_new_form"); 
const cardsContainer = document.querySelector(".elements"); 
const cardsTemplate = document.querySelector("#template-cards").content; 
const popupFormEdit = document.querySelector(".popup__form_theme_edit"); 
const popupFormNewPic = document.querySelector(".popup__form_new_pic"); 
const popupInputThemeNamePic = document.querySelector(".popup__input_theme_name-pic"); 
const popupInputThemePic = document.querySelector(".popup__input_theme_pic"); 
const popupImageOpen = document.querySelector(".element__image"); 
const popupPic = document.querySelector(".popup_pic"); 
const popupImage = document.querySelector(".popup__image"); 
const popupPicClose = document.querySelector(".popup__close_theme_pic"); 
const popups = document.querySelectorAll(".popup");
const popupMistakes = document.querySelectorAll('.popup__error')
const popupInputTypeErrors = document.querySelectorAll('.popup__input');
const buttonsSubmit = document.querySelectorAll('.popup__submit');
const closeButtons = document.querySelectorAll('.popup__close');

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

} 
 
function handleCardFormSubmit(evt) { 
 
  evt.preventDefault(); 
 
  const card = createCard( 
    popupInputThemePic.value, 
    popupInputThemeNamePic.value 
  ); 
  cardsContainer.prepend(card);  
  closePopup(popupNewPlace);
} 
//удвление элемента 
const handleLikeClick = (evt) => { 
 
  const item = evt.target.closest(".element"); 
 
  item.remove(); 
}; 
const likeCard = (evt) => { 
 
  evt.target.classList.toggle("element__button-active"); 
}; 
//6 карточек 
 
function createCard(link, name) { 
  const cardElement = cardsTemplate.cloneNode(true); 
  const elementImage = cardElement.querySelector('.element__image'); 
  const popupImage = document.querySelector(".popup__image"); 
  const popupTitlePic = document.querySelector(".popup__title-pic"); 
 
  elementImage.src = link; 
  elementImage.alt = name; 
 
  cardElement.querySelector(".element__title").textContent = name; 
  cardElement.querySelector(".element__button-trash").addEventListener("click", handleLikeClick); 
  cardElement.querySelector(".element__button").addEventListener("click", likeCard); 
 
    elementImage.addEventListener("click", function () { 
      openPopup(popupPic);
      popupImage.src = link; 
      popupImage.alt = link; 
      popupTitlePic.textContent = name; 
    }); 
 
  return cardElement; 
} 
 
initialCards.forEach((card) => { 
 
  const elementDesc = createCard(card.link, card.name); 
 
  cardsContainer.append(elementDesc); 
 
}); 


closeButtons.forEach((button) => {

  const popup = button.closest('.popup');

  button.addEventListener('click', () => closePopup(popup));
});
/* 
popupPicClose.addEventListener("click", () => 
 closePopup(popupPic)
); 
popupCloseButtonEdit.addEventListener("click", () => 
 
  closePopup(popupThemeEdit)
); 
popupCloseButtonFormPic.addEventListener("click", () => 

 closePopup(popupNewPlace)
 );
 */
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
popupFormEdit.addEventListener("submit", handleProfileFormSubmit); 
popupOpenButtonEdit.addEventListener("click", openProfilePopup); 
buttonOpenAddPlacePopup.addEventListener("click", openPopupNewPlace); 
popupFormNewPic.addEventListener("submit", handleCardFormSubmit); 












