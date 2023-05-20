const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupOpenButton = document.querySelector ('.profile__button-edit');
const popup = document.querySelector ('.popup');
const popupCloseButton = document.querySelector ('.popup__close');
const popupName = document.querySelector('.popup__input_theme_name');
const popupHoby = document.querySelector('.popup__input_theme_hoby');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupOpenButtonPlus = document.querySelector('.profile__add-button');
const popupNewPlace = document.querySelector('.popup_new-form');
const newFormClose = document.querySelector('.popup_new-form_close');
const popupFormNewPic = document.querySelector('.popup__form_new-pic');
const cardsContainer =  document.querySelector('.elements');
const cardsTamplate = document.querySelector('#template-cards').content;
const cardTemplate = cardsTamplate.querySelector('.element');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup_opened')

function popupOpen () {
    togglePopupState(popup);
    popupName.value = profileTitle.textContent;
    popupHoby.value = profileSubtitle.textContent;
}
function fillForm (event) {
    event.preventDefault();
    profileTitle.textContent = popupName.value;
    profileSubtitle.textContent = popupHoby.value;
    togglePopupState(popup);
}

popupCloseButton.addEventListener('click', () => togglePopupState(popup));
document.querySelector('.popup__form').addEventListener('submit',fillForm);
popupOpenButton.addEventListener('click', popupOpen);

popupOpenButtonPlus.addEventListener('click', popupOpenNewPlace);
newFormClose.addEventListener('click',popupOpenNewPlace);
document.querySelector('.popup__form_new-pic').addEventListener('submit',fillFormPic);

function popupOpenNewPlace () {
  popupInputThemeNamePic.value = '';
  popupInputThemePic.value = '';
   togglePopupState(popupNewPlace);
}
const popupInputThemeNamePic = document.querySelector('.popup__input_theme_name-pic');
const popupInputThemePic = document.querySelector('.popup__input_theme_pic');

function fillFormPic (evt){
  evt.preventDefault();
  const fat = creatElement(popupInputThemePic.value,popupInputThemeNamePic.value);
  cardsContainer.prepend(fat);
  togglePopupState(popupNewPlace);
} 
  //удвление элемента
  const deletItem = (evt) =>{
     const item = evt.target.closest('.element');
     item.remove();
  };
  const likeItem = (evt) => {
    evt.target.classList.toggle('element__button-active');
  };
  //6 карточек
  function creatElement (link,name) {
    const cardElement = cardsTamplate.cloneNode(true);
    cardElement.querySelector('.element__image').src = link;
    cardElement.querySelector('.element__image').alt = name;
    cardElement.querySelector('.element__title').textContent = name;
    cardElement.querySelector('.element__button-trash').addEventListener('click',deletItem);
    cardElement.querySelector('.element__button').addEventListener('click',likeItem);
    
    cardElement.querySelector('.element__image').addEventListener('click', function (){
      togglePopupState(popupPic);
      const popupImage = document.querySelector('.popup__image');
      const popupTitlePic = document.querySelector('.popup__title-pic');
      popupImage.src = link 
      popupImage.alt = link;
      popupTitlePic.textContent = name;
    });
    return cardElement;
  }
  initialCards.forEach((card) => {
    const elementDesc = creatElement(card.link, card.name);
    cardsContainer.append(elementDesc);
    
  });
  const popupImageOpen = document.querySelector('.element__image');
  const popupPic = document.querySelector('.popup_pic');
  const popupImage = document.querySelector('.popup__image');
  const popupPicClose = document.querySelector('.popup_pic-close');

  popupPicClose.addEventListener('click',popupClosePic);

  function popupClosePic(){
    togglePopupState(popupPic);
  }

  /*function popupOpenPic(){
    togglePopupState(popupPic);
    const popupImage = document.querySelector('.popup__image');
    popupImage.src = cardElement.querySelector('.element__image').src; 
    popupImage.alt = cardElement.querySelector('.element__image').alt;
  }
  */