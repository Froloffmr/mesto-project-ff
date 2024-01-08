import './pages/index.css'
import { initialCards } from './scripts/cards'
import { cardContainer, createCard, deleteCard, renderCard, like } from './scripts/Card'
import { openPopup } from './scripts/modal'
import { closePopup } from './scripts/modal'

const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeEdit= document.querySelector('.popup_type_edit');
const profileAddButton = document.querySelector('.profile__add-button');
const popupNewCard= document.querySelector('.popup_type_new-card');
const formElementEdit = document.forms['edit-profile'];
const domNameInput = document.querySelector('.profile__title');
const domjobInput = document.querySelector('.profile__description');
const formElementCard = document.forms['new-place'];
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
    openPopup(popupTypeEdit);
    formElementEdit.elements.name.value=domNameInput.innerText;
    formElementEdit.elements.description.value=domjobInput.innerText;
});

profileAddButton.addEventListener('click', function () {
    openPopup(popupNewCard);
});
// Плавность
const popups = document.querySelectorAll('.popup')
popups.forEach(function (popup) {
    popup.classList.add('popup_is-animated');  
});
// редактирование профиля
function handleFormSubmitEdit(evt) {
    evt.preventDefault();
    domNameInput.textContent = formElementEdit.elements.name.value;
    domjobInput.textContent = formElementEdit.elements.description.value;
    closePopup(popupTypeEdit);
};
// добавление NewCard
function handleFormSubmitCard(evt) {
    evt.preventDefault();
    const newCard = createCard({ name: nameInputCard.value, link: srcInputCard.value }, deleteCard, like, openImageWindow);
    cardContainer.prepend(newCard);
    evt.target.reset();
    closePopup(popupNewCard);
};
// открытие окна с картинкой
function openImageWindow(evt) {
    openPopup(popupOpenImage);
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupCaption.textContent = evt.target.alt;
};

formElementEdit.addEventListener('submit', handleFormSubmitEdit);
formElementCard.addEventListener('submit', handleFormSubmitCard);

