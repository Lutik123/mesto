

 class FormValidator {
  constructor (formObj,formElement) {
    this._formObj = formObj;
    this._formElement = formElement;
    this._inputElement = this._formObj.formSelector;
    this._inputSelector = this._formElement.querySelector(this._formObj.inputSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._formObj.inputSelector))
    this._submitButtonSelector = this._formElement.querySelector(this._formObj.submitButtonSelector);
    this._inactiveButtonClass = this._formObj.inactiveButtonClass;
    this._inputErrorClass = this._formObj.inputErrorClass;
    this._errorClass = this._formElement.querySelector(this._formObj.errorClass);
  }
  _showInputError(inputElement,errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._formObj._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._formObj._errorClass); 
  }
  _hideInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._formObj._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._formObj._errorClass);
  }
  _checkInputValidity (inputElement) {
   
    if (!inputElement.validity.valid) {
      
      this._showInputError(inputElement,inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  _hasInvalidInput () {
    return this._inputList.some((inputElement) =>{
      return !inputElement.validity.valid;
    });
  }
  _toggleButtonState () { 
    if (this._hasInvalidInput()) {
      this._submitButtonSelector.setAttribute('disabled',true);
      this._submitButtonSelector.classList.add(this._inactiveButtonClass);
    } else {
      this._submitButtonSelector.removeAttribute('disabled',true);
      this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
    }
  }

  _setEventListeners () {
    
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () =>{
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
      
    })
  }

  enableValidation () {
  this._inputList.forEach(() => {
    this._setEventListeners();
  }); 
  }
 }

 export {FormValidator}
