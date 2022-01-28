/*import { initialCards } from "./initial-cards.js";*/
import { enableValidation } from "./validation.js";
import { addCard } from "./card.js";
import { editProfile, openPopup, updateInputValue} from "./modal.js";

const buttonEdit = document.querySelector(".profile__button-edit");
export const popupProfile = document.querySelector(".popup_type_profile");
/*const buttonCloseEdit = document.querySelector("#button-close-edit");*/
export const profileForm = popupProfile.querySelector("#profile-form");
export const nameInput = popupProfile.querySelector("#name");
export const jobInput = popupProfile.querySelector("#information");

export const profileTitle = document.querySelector(".profile__title");
export const profileSubtitle = document.querySelector(".profile__subtitle");

//const buttonSubmitEdit = popupProfile.querySelector("#subject"); прикол

const newCardOpenButton = document.querySelector(".profile__button-add");
export const newCardPopup = document.querySelector(".popup_type_card-add");
/*const buttonCloseAdd = document.querySelector("#button-close-add");*/

/*const cards = document.querySelector(".elements");
const cardTemplate = document.querySelector("#element-template").content;*/

export const cardsForm = document.querySelector("#cards-form");
/*const titleInput = newCardPopup.querySelector("#title");
const linkInput = newCardPopup.querySelector("#link");*/

//const buttonSubmitAdd = newCardPopup.querySelector("#create"); прикол

/*const popupImg = document.querySelector(".popup_type_picture");
const popupImgPic = document.querySelector(".popup__pic");
const popupImgText = document.querySelector(".popup__text");
const buttonCloseImg = document.querySelector("#button-close-img");*/

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  buttonSelector: ".form__button-submit",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
});

/*function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
  document.addEventListener("click", closePopupOnClick);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
  document.removeEventListener("mouseup", closePopupOnClick);
}*/

/*buttonCloseEdit.addEventListener("click", function () {
  closePopup(popupProfile);
});*/

/*function editProfile(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileSubtitle.textContent = jobValue;
  closePopup(popupProfile);
}*/

profileForm.addEventListener("submit", editProfile);

/*function updateInputValue(inputElement, value) {
  inputElement.value = value;
  inputElement.dispatchEvent(new Event("input"));
}*/

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

/*buttonCloseAdd.addEventListener("click", function () {
  closePopup(newCardPopup);
});*/

/*function createCard(element) {
  const cardElement = cardTemplate.cloneNode(true).querySelector(".element");
  const cardImages = cardElement.querySelector(".element__images");
  cardElement.querySelector(".element__title").textContent = element.name;
  cardImages.alt = element.name;
  cardImages.src = element.link;

  const cardButtonLike = cardElement.querySelector(".element__button-like");
  cardButtonLike.addEventListener("click", toggleLike);
  const cardButtonDelete = cardElement.querySelector(".element__button-delete");
  cardButtonDelete.addEventListener("click", deleteCard);
  cardImages.addEventListener("click", openImg);

  return cardElement;
}

function addCard(evt) {
  evt.preventDefault();

  cards.prepend(
    createCard({
      name: titleInput.value,
      link: linkInput.value,
    })
  );
  cardsForm.reset();
  closePopup(newCardPopup);
}*/

cardsForm.addEventListener("submit", addCard);

/*function openImg(evt) {
  popupImgPic.src = evt.target.src;
  popupImgPic.alt = evt.target.alt;
  popupImgText.textContent = evt.target.alt;
  openPopup(popupImg);
}

buttonCloseImg.addEventListener("click", function () {
  closePopup(popupImg);
});

function toggleLike(evt) {
  if (evt.target.classList.contains("element__button-like")) {
    evt.target.classList.toggle("element__button-like_active");
  }
}

function deleteCard(evt) {
  evt.target.closest(".element").remove();
}

function createCards(initialCards, cards) {
  initialCards.forEach(function (cardElement) {
    cardElement = createCard(cardElement);
    cards.append(cardElement);
  });
}

createCards(initialCards, cards);*/


/*
//закртие попапа при клике по кнопке esc

const closePopupEsc = (evt) => {
  if (evt.key === "Escape") {
    const popupEsc = document.querySelector(".popup_opened");
    closePopup(popupEsc);
  }
};

//закртие попапа при клике вне попапа

const closePopupOnClick = (evt) => {
  const popupContainerOpend = document.querySelector(".popup_opened");
  if (popupContainerOpend === evt.target) {
    closePopup(popupContainerOpend);
  }
};*/