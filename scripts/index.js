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
const popopFormEdit = document.querySelector(".popup__form_theme_edit");
const popupFormNewPic = document.querySelector(".popup__form_new_pic");
const popupInputThemeNamePic = document.querySelector(".popup__input_theme_name-pic");
const popupInputThemePic = document.querySelector(".popup__input_theme_pic");
const popupImageOpen = document.querySelector(".element__image");
const popupPic = document.querySelector(".popup_pic");
const popupImage = document.querySelector(".popup__image");
const popupPicClose = document.querySelector(".popup__close_theme_pic");

const togglePopupState = (popupToToggle) =>
  popupToToggle.classList.toggle("popup_opened");

function openProfilePopup () {
  togglePopupState(popupThemeEdit);

  inputName.value = profileTitle.textContent;
  inputHoby.value = profileSubtitle.textContent;
}

function handleProfileFormSubmit(event) {
  event.preventDefault ();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputHoby.value;
  togglePopupState(popupThemeEdit);
}



function openPopupNewPlace() {
  popupInputThemeNamePic.value = "";
  popupInputThemePic.value = "";
  togglePopupState(popupNewPlace);
}

function handleCardFormSubmit(evt) {

  evt.preventDefault();

  const card = createCard(
    popupInputThemePic.value,
    popupInputThemeNamePic.value
  );
  cardsContainer.prepend(card);
  togglePopupState(popupNewPlace);
}
//удвление элемента
const deleteCard = (evt) => {

  const item = evt.target.closest(".element");

  item.remove();
};
const likeItem = (evt) => {

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
  cardElement.querySelector(".element__button-trash").addEventListener("click", deleteCard);
  cardElement.querySelector(".element__button").addEventListener("click", likeItem);

    elementImage.addEventListener("click", function () {
      togglePopupState(popupPic);
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

function popupClosePic() {
  togglePopupState(popupPic);
}

popupPicClose.addEventListener("click", popupClosePic);
popupCloseButtonEdit.addEventListener("click", () =>
  togglePopupState(popupThemeEdit)
);
popopFormEdit.addEventListener("submit", handleProfileFormSubmit);
popupOpenButtonEdit.addEventListener("click", openProfilePopup);
buttonOpenAddPlacePopup.addEventListener("click", openPopupNewPlace);
popupCloseButtonFormPic.addEventListener("click", openPopupNewPlace);
popupFormNewPic.addEventListener("submit", handleCardFormSubmit);