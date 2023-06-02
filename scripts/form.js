//const form = document.querySelector('.popup__form');
//const formInput = form.querySelector('.popup__input');
//const formError = form.querySelector(`#${formInput.id}-error`);
 const obj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  };

  const showInputError = (formElement,inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
  };
  
  const hideInputError = (formElement,inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement,inputElement) => {
    
    if (!inputElement.validity.valid) {
      showInputError(formElement,inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement,inputElement);
    }
  };
  
  
  const toggleButtonState = (inputList, buttonElement) => {
   
    const buttonElementSost = document.querySelectorAll(buttonElement.submitButtonSelector);
    
    buttonElementSost.forEach(function(buttonChange){
  
        if (hasInvalidInput(inputList)) {
      
            buttonChange.setAttribute('disabled',true);
            buttonChange.classList.add('popup__submit_invalid');
            
          } else {
            
            buttonChange.removeAttribute('disabled');
            buttonChange.classList.remove('popup__submit_invalid');
            
          }
    });
    
  
  };
  const hasInvalidInput = (inputList) => {
     
      return inputList.some((inputElement) => {
  
        
        return !inputElement.validity.valid;
      });
    }; 
  
  
  
  
  function setEventListeners (formElement,validationConf) {
    const  inputList = Array.from(formElement.querySelectorAll(validationConf.inputSelector));
    //toggleButtonState(inputList, validationConf.submitButtonSelector);
    inputList.forEach(function(inputElement){
      inputElement.addEventListener('input',function(){
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, validationConf);
      });
    });
  };
  
  
  
  function enableValidation (validationConf) {
    const formList = Array.from(document.querySelectorAll(validationConf.formSelector)); 
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  
   // formList.forEach(function(formElement){
    //    console.log(formElement)
        
   // })
    setEventListeners(formElement,validationConf);
    
      
      
  });
  }
  enableValidation(obj);

  
