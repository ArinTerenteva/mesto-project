import "../pages/index.css";
import { enableValidation } from "./validation.js";
import { addCard } from "./card.js";
import { editProfile, openPopup, updateInputValue} from "./modal.js";

const buttonEdit = document.querySelector(".profile__button-edit");
export const popupProfile = document.querySelector(".popup_type_profile");
export const profileForm = popupProfile.querySelector("#profile-form");
export const nameInput = popupProfile.querySelector("#name");
export const jobInput = popupProfile.querySelector("#information");

export const profileTitle = document.querySelector(".profile__title");
export const profileSubtitle = document.querySelector(".profile__subtitle");

const newCardOpenButton = document.querySelector(".profile__button-add");
export const newCardPopup = document.querySelector(".popup_type_card-add");
export const cardsForm = document.querySelector("#cards-form");

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  buttonSelector: ".form__button-submit",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
});

profileForm.addEventListener("submit", editProfile);

newCardOpenButton.addEventListener("click", function () {
  openPopup(newCardPopup);
});

buttonEdit.addEventListener("click", function () {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  updateInputValue(jobInput, profileSubtitle.textContent);
  updateInputValue(nameInput, profileTitle.textContent);
});

cardsForm.addEventListener("submit", addCard);
