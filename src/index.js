import './pages/index.css'
import { initialCards } from './scripts/cards'
import { cardContainer, createCard, deleteCard, renderCard, like } from './scripts/Card'
import { openPopup } from './scripts/modal'
import { closePopup } from './scripts/modal'

const profileEditButton = document.querySelector('.profile__edit-button');
const addClass = document.querySelector('.popup_type_edit');
const profileAddButton = document.querySelector('.profile__add-button');
const addCard = document.querySelector('.popup_type_new-card');
const formElement = document.forms['edit-profile'];
const domNameInput = document.querySelector('.profile__title');
const domjobInput = document.querySelector('.profile__description');
const formElementCadr = document.forms['new-place'];
const nameInputCard = document.querySelector('.popup__input_type_card-name');
const srcInputCard = document.querySelector('.popup__input_type_url');
const popupOpenImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
// Вывести карточки на страницу
initialCards.forEach(function (item) {
    const createdCard = createCard(item, deleteCard, like, openImageWindow);
    renderCard(createdCard);
});
// Отрытие попапа
profileEditButton.addEventListener('click', function () {
    openPopup(addClass);
});

profileAddButton.addEventListener('click', function () {
    openPopup(addCard);
});
// Плавность, закрытие на ESC, закрытие на лэйаут
const popups = document.querySelectorAll('.popup')
popups.forEach(function (popup) {
    popup.classList.add('popup_is-animated');
    popup.addEventListener('mousedown', function (evt) {
        if (evt.target.classList.contains('popup_is-opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup)
        }
    });
    document.addEventListener('keydown', function (evt) {
        if (evt.key === 'Escape') {
            closePopup(popup);
        }
    });
});
// редактирование профиля
function handleFormSubmit(evt) {
    evt.preventDefault();
    domNameInput.textContent = formElement.elements.name.value;
    domjobInput.textContent = formElement.elements.description.value;
    closePopup(addClass);
};
// добавление NewCard
function handleFormSubmitCard(evt) {
    evt.preventDefault();
    const newCard = createCard({ name: nameInputCard.value, link: srcInputCard.value }, deleteCard, like, openImageWindow);
    cardContainer.prepend(newCard);
    evt.target.reset();
    closePopup(addCard);
};
// открытие окна с картинкой
function openImageWindow(evt) {
    openPopup(popupOpenImage);
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupCaption.textContent = evt.target.alt;
};

formElement.addEventListener('submit', handleFormSubmit);
formElementCadr.addEventListener('submit', handleFormSubmitCard);

