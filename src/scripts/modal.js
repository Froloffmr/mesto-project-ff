//Открытие и закрытие попапа
export function openPopup(evt) {
  evt.classList.add('popup_is-opened');
};

export function closePopup(evt) {
  evt.classList.remove('popup_is-opened');
}

