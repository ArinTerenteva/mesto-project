//проверить форму на валидность
const isFormValid = (inputList) => {
  return inputList.every((inputElement) => inputElement.validity.valid);
};

const getErrorElement = (inputElement, formElement) => {
  return formElement.querySelector(`#${inputElement.name}-error`);
};

//скрыть ошибку
const hideInputError = (inputElement, formElement, enableValidation) => {
  const errorElement = getErrorElement(inputElement, formElement);
  inputElement.classList.remove(enableValidation.inputErrorClass);
  errorElement.classList.remove(enableValidation.errorClass);
  errorElement.textContent = "";
};

//показать ошибку
const showInputError = (inputElement, formElement, enableValidation) => {
  const errorElement = getErrorElement(inputElement, formElement);
  inputElement.classList.add(enableValidation.inputErrorClass);
  errorElement.classList.add(enableValidation.errorClass);
  errorElement.textContent = inputElement.validationMessage;
};

const checkInputValidity = (inputElement, formElement, enableValidation) => {
  if (inputElement.validity.valid) {
    hideInputError(inputElement, formElement, enableValidation);
  } else {
    showInputError(inputElement, formElement, enableValidation);
  }
};

const toggleButtonState = (submitButton, inputList) => {
  //если форма валидная включаем кнопку, иначе выключаем
  if (isFormValid(inputList)) {
    console.log("valid");
    submitButton.disabled = false;
  } else {
    console.log("invalid");
    submitButton.disabled = true;
  }
};

const setEventListeners = (formElement, enableValidation) => {
  //отмеить перезагрузку
  formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });

  //найти все инпуты
  const inputList = Array.from(
    formElement.querySelectorAll(enableValidation.inputSelector)
  );
  //найти кнопку отправки
  const submitButton = formElement.querySelector(enableValidation.buttonSelector);

  //слушатель для инпутов
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      //проверка инпутов на валидность
      checkInputValidity(inputElement, formElement, enableValidation);
      toggleButtonState(submitButton, inputList, enableValidation);
    });
  });
  toggleButtonState(submitButton, inputList, enableValidation);
};

//валидация форм
export const enableValidation = (enableValidation) => {
  //найти все формы
  const formList = Array.from(
    document.querySelectorAll(enableValidation.formSelector)
  );

  //валидация для каждой формы
  formList.forEach((formElement) => {
    setEventListeners(formElement, enableValidation);
  });
};
