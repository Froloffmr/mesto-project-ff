//Открытие попапа 
export function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupByEsc);
};
//Закрытие попапа на кнопку ESC
const closePopupByEsc = function(evt) {
  if (evt.key === 'Escape') { 
    closePopup(document.querySelector('.popup_is-opened')); 
  } 
};
//Закрытие попапа по клику на оверлей
export const closePopupByClick = function(evt) {
  if (evt.target.classList.contains('popup_is-opened') || evt.target.classList.contains('popup__close')) { 
     closePopup(evt.currentTarget) 
  } 
};
//Закрытие попапа
export function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  popup.removeEventListener('keydown', closePopupByEsc);
  popup.removeEventListener('click', closePopupByClick);
};