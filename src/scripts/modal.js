//Открытие попапа 
export function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  }, { once: true });
  popup.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('popup_is-opened')) {
    closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
    closePopup(popup)
    }
    },{ once: true });
};
//Закрытие попапа
export function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
}

