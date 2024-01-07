// Темплейт карточки
export const templateCard = document.querySelector('#card-template').content;
// DOM узлы
export const cardContainer = document.querySelector('.places__list');
// Функция создания карточки
export function createCard(item, deleteCard, like, openImageWindow) {
    const cardComponent = templateCard.querySelector('.places__item').cloneNode(true);
    cardComponent.querySelector('.card__image').src = item.link;
    cardComponent.querySelector('.card__image').alt = item.name;
    cardComponent.querySelector('.card__title').textContent = item.name;
    cardComponent.querySelector('.card__image').addEventListener('click', openImageWindow);
    const deleteButton = cardComponent.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);
    const likeButton = cardComponent.querySelector('.card__like-button');
    likeButton.addEventListener('click', like);
    return cardComponent;
};
// Функция удаления карточки
export function deleteCard(evt) {
    const delCard = evt.target.closest('.places__item');
    delCard.remove();
};
//  Функция добавления карточки в разметку
export function renderCard(card) {
    cardContainer.prepend(card);
};
//  Функция лайка
export function like(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
    cardContainer.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('.card__like-button')) {
            like(evt.target);
        }
    });
};








