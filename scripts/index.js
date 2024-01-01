// Темплейт карточки
const templateCard = document.querySelector('#card-template').content;

// DOM узлы
const cardContainer = document.querySelector('.places__list');

// Функция создания карточки
function createCard(item, deleteCard) {
    const cardComponent = templateCard.querySelector('.places__item').cloneNode(true);
    cardComponent.querySelector('.card__image').src = item.link;
    cardComponent.querySelector('.card__image').alt = item.name;
    cardComponent.querySelector('.card__title').textContent = item.name;
    const deleteButton = cardComponent.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);
    return cardComponent;
}

// Функция удаления карточки
function deleteCard(evt) {
    const delCard = evt.target.closest('.places__item');
    delCard.remove();
}

// Функция добавления карточки в разметку
function renderCard(card) {
    cardContainer.prepend(card);
}

// Вывести карточки на страницу
initialCards.forEach(function (item) {
    const createdCard = createCard(item, deleteCard);
    renderCard(createdCard);
});