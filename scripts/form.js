//const form = document.querySelector('.popup__form');
//const formInput = form.querySelector('.popup__input');
//const formError = form.querySelector(`#${formInput.id}-error`);
 const obj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_invalid',
    inputErrorClass: 'popup__input_type_error',//1
    errorClass: 'popup__error_visible'//2
  };

  const showInputError = (formElement,inputElement, errorMessage,validationConf) => {
    
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(validationConf.inputErrorClass);//1
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConf.errorClass);//2
  };
  
  const hideInputError = (formElement,inputElement,validationConf) => {
    
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(validationConf.inputErrorClass);//1
    errorElement.classList.remove(validationConf.errorClass);//2
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement,inputElement,validationConf) => {
    
    if (!inputElement.validity.valid) {
      showInputError(formElement,inputElement, inputElement.validationMessage,validationConf);
    } else {
      hideInputError(formElement,inputElement,validationConf);
    }
  };
  
  
  const toggleButtonState = (inputList, buttonElement) => {
   
    const buttonElementSost = document.querySelectorAll(buttonElement.submitButtonSelector);
    
    buttonElementSost.forEach(function(buttonChange){
  
        if (hasInvalidInput(inputList)) {
            buttonChange.setAttribute('disabled',true);
            buttonChange.classList.add(buttonElement.inactiveButtonClass);
            
          } else {
            
            buttonChange.removeAttribute('disabled');
            buttonChange.classList.remove(buttonElement.inactiveButtonClass);
            
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
      checkInputValidity(formElement, inputElement,validationConf);
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

  
