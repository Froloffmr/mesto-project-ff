// @todo: Темплейт карточки
const templateCard = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(item) {
    const cardComponent = templateCard.querySelector('.places__item').cloneNode(true);
    cardComponent.querySelector('.card__image').src = item.link;
    cardComponent.querySelector('.card__image').alt = item.name;
    cardComponent.querySelector('.card__title').textContent = item.name;
    const deleteButton = cardComponent.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);
    cardContainer.append(cardComponent);
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
    const delCard = evt.target.closest('.places__item');
    delCard.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
    createCard(item);
});