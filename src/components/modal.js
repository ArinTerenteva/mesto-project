import {
  nameInput,
  jobInput,
  profileTitle,
  profileSubtitle,
  popupProfile,
  newCardPopup,
} from "./index.js";

const buttonCloseEdit = document.querySelector("#button-close-edit");
const buttonCloseAdd = document.querySelector("#button-close-add");

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
  popup.addEventListener("click", closePopupOnClick);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
  popup.removeEventListener("mouseup", closePopupOnClick);
}

buttonCloseEdit.addEventListener("click", function () {
  closePopup(popupProfile);
});

buttonCloseAdd.addEventListener("click", function () {
  closePopup(newCardPopup);
});

export function editProfile(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  profileTitle.textContent = nameValue;
  profileSubtitle.textContent = jobValue;
  closePopup(popupProfile);
}

export function updateInputValue(inputElement, value) {
  inputElement.value = value;
  inputElement.dispatchEvent(new Event("input"));
}

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
};
