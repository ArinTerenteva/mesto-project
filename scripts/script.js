const buttonEdit = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup_type_profile");
const buttonCloseEdit = document.querySelector("#button-close-edit");
const profileForm = popupProfile.querySelector("#profile-form");
const nameInput = popupProfile.querySelector("#name");
const jobInput = popupProfile.querySelector("#information");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const buttonSubmitEdit = popupProfile.querySelector("#subject");

const newCardOpenButton = document.querySelector(".profile__button-add");
const newCardPopup = document.querySelector(".popup_type_card-add");
const buttonCloseAdd = document.querySelector("#button-close-add");

const cards = document.querySelector(".elements");
const cardTemplate = document.querySelector("#element-template").content;

const cardsForm = document.querySelector("#cards-form");
const titleInput = newCardPopup.querySelector("#title");
const linkInput = newCardPopup.querySelector("#link");
const buttonSubmitAdd = newCardPopup.querySelector("#create");

const popupImg = document.querySelector(".popup_type_picture");
const popupImgPic = document.querySelector(".popup__pic");
const popupImgText = document.querySelector(".popup__text");
const buttonCloseImg = document.querySelector("#button-close-img");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

buttonCloseEdit.addEventListener("click", function () {
  closePopup(popupProfile);
});

function editProfile(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileSubtitle.textContent = jobValue;
  closePopup(popupProfile);
}

profileForm.addEventListener("submit", editProfile);

newCardOpenButton.addEventListener("click", function () {
  openPopup(newCardPopup);
});

buttonEdit.addEventListener("click", function () {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});

buttonCloseAdd.addEventListener("click", function () {
  closePopup(newCardPopup);
});

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

  cards.prepend(
    createCard({
      name: titleInput.value,
      link: linkInput.value,
    })
  );
  cardsForm.reset();
  closePopup(newCardPopup);
}

cardsForm.addEventListener("submit", addCard);

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
