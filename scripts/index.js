const popupOpenButton = document.querySelector ('.profile__button-edit');
const popup = document.querySelector ('.popup');
const popupCloseButton = document.querySelector ('.popup__close');
const popupName = document.querySelector('.popup__input_name');
const popupHoby = document.querySelector('.popup__input_hoby');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup__opened')
   
function popupOpen () {
    togglePopupState(popup);
    popupName.value = profileTitle.textContent;
    popupHoby.value = profileSubtitle.textContent;
}
function fillForm (event) {
    event.preventDefault();
    profileTitle.textContent = popupName.value;
    profileSubtitle.textContent = popupHoby.value;
    togglePopupState(popup)
}
popupCloseButton.addEventListener('click', () => togglePopupState(popup));
document.querySelector('.popup__form').addEventListener('submit',fillForm);
popupOpenButton.addEventListener('click', popupOpen);



