const buttonEdit = document.querySelector(".profile__button-edit");
const popup = document.querySelector("#popup-edit");
const buttonCloseEdit = document.querySelector("#button-close-edit");
const formElement = popup.querySelector("#form1");
const nameInput = popup.querySelector("#name");
const jobInput = popup.querySelector("#information");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const buttonSubmitEdit = popup.querySelector("#subject");

const buttonAdd = document.querySelector(".profile__button-add");
const popupTwo = document.querySelector("#popup-add");
const buttonCloseAdd = document.querySelector("#button-close-add");

const cards = document.querySelector(".elements");
const cardTemplate = document.querySelector("#element-template").content;

const formElement2 = document.querySelector("#form2");
const titleInput = popupTwo.querySelector("#title");
const linkInput = popupTwo.querySelector("#link");
const buttonSubmitAdd = popupTwo.querySelector("#create");

const popupImg = document.querySelector("#popup-img");
const popupImgPic = document.querySelector(".popup-img__pic");
const popupImgText = document.querySelector(".popup-img__text");
const buttonCloseImg = document.querySelector("#button-close-img");

buttonEdit.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});

buttonCloseEdit.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

function editProfile(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileSubtitle.textContent = jobValue;
}

formElement.addEventListener("submit", editProfile);

buttonSubmitEdit.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

buttonAdd.addEventListener("click", function () {
  popupTwo.classList.add("popup_opened");
});

buttonCloseAdd.addEventListener("click", function () {
  popupTwo.classList.remove("popup_opened");
});

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

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

function addCard(evt) {
  evt.preventDefault();

  const addCards = {
    name: "",
    link: "",
  };

  addCards.name = titleInput.value;
  addCards.link = linkInput.value;
  cards.prepend(createCard(addCards));
  formElement2.reset();
}

formElement2.addEventListener("submit", addCard);

buttonSubmitAdd.addEventListener("click", function () {
  popupTwo.classList.remove("popup_opened");
});

function openImg(evt) {
  popupImgPic.src = evt.target.src;
  popupImgPic.alt = evt.target.alt;
  popupImgText.textContent = evt.target.alt;
  popupImg.classList.add("popup_opened");
}

buttonCloseImg.addEventListener("click", function () {
  popupImg.classList.remove("popup_opened");
});

function toggleLike(evt) {
  if (evt.target.classList.contains("element__button-like")) {
    evt.target.classList.toggle("element__button-like_active");
  }
}

function deleteCard(evt) {
  evt.target.closest(".element").remove();
}

function createCards() {
  for (let i = 0; i < initialCards.length; i++) {
    const cardElement = createCard(initialCards[i]);
    cards.append(cardElement);
  }
}

createCards();