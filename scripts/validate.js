const showInputError = (formElement, inputElement, errorMessage, settings) => {
console.log(inputElement);
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};

const hideInputError = (formElement, inputElement, settings) => {
  console.log(inputElement);
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(settings.errorClass);
};

const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement, 
      inputElement, 
      inputElement.validationMessage, 
      settings
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );

  const buttonElement = formElement.querySelector(".submit__button");

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, settings); 
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};



function toggleButtonState (inputList, buttonElement, settings) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("button_inactive");
    buttonElement.disabled = false;
  }
};


function enableValidation(settings) { 
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  console.log(formList);
  formList.forEach((formElement) => { 
    formElement.addEventListener("submit", function (evt) { 
      evt.preventDefault(); 
    });

    setEventListeners(formElement, settings);
  });
};
    

enableValidation({
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".submit__button",
    inactiveButtonClass: ".submit__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_visible"
  });


