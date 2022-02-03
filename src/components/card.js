import { initialCards } from "./initialCards.js";
import { cardsForm } from "./index.js";
import { newCardPopup } from "./index.js";
import { closePopup } from "./modal.js";
import { openPopup } from "./modal.js";

const cards = document.querySelector(".elements");
const cardTemplate = document.querySelector("#element-template").content;

const popupImg = document.querySelector(".popup_type_picture");
const popupImgPic = document.querySelector(".popup__pic");
const popupImgText = document.querySelector(".popup__text");
const buttonCloseImg = document.querySelector("#button-close-img");

const titleInput = document.querySelector("#title");
const linkInput = document.querySelector("#link");


function createCard(element) {
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

export function addCard(evt) {
  evt.preventDefault();

  cards.prepend(
    createCard({
      name: titleInput.value,
      link: linkInput.value,
    })
  );
  cardsForm.reset();
  closePopup(newCardPopup);
}

function openImg(evt) {
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

createCards(initialCards, cards);
