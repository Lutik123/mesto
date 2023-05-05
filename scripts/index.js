const popupOpenButton = document.querySelector ('.profile__popup-open');
const popup = document.querySelector ('.popup');
const popupCloseButton = document.querySelector ('.popup__close');

const togglePopupState = (popupToToggle) => popupToToggle.classList.toggle('popup__opened')

popupOpenButton.addEventListener('click', () => togglePopupState(popup));

popupCloseButton.addEventListener('click', () => togglePopupState(popup));

popup.addEventListener('click', (evt) => { 
    if (evt.target===evt.currentTarget){
        togglePopupState(popup);
    } 
});

const popupName = document.querySelector('.popup__input-name');
const popupHoby = document.querySelector('.popup__input-hoby');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

popupName.value = profileTitle.textContent;
popupHoby.value = profileSubtitle.textContent;
function fillForm (event){
    event.preventDefault();
    profileTitle.textContent = popupName.value;
    profileSubtitle.textContent = popupHoby.value;  
}
document.querySelector('.popup__form').addEventListener('submit',fillForm);
addEventListener('submit',() =>togglePopupState(popup));
