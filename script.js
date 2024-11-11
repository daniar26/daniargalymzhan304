const viewButtons = document.querySelectorAll('.image-item .btn');
const modal = document.createElement('div'); // Модальное окно
const modalContent = document.createElement('div'); // Контейнер для изображения
const closeButton = document.createElement('button'); // Кнопка для закрытия

// Модальное окно
modal.id = 'modal';
modalContent.classList.add('modal-content');
closeButton.textContent = 'Закрыть';
closeButton.classList.add('close-btn');

// Добавляем кнопку закрытия
modalContent.appendChild(closeButton);
modal.appendChild(modalContent);
document.body.appendChild(modal);

viewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const imageSrc = button.previousElementSibling.src; // Получаем src изображения
        openModal(imageSrc);
    });
});

// Функция для открытия модального окна
function openModal(imageSrc) {
    const modalImage = document.createElement('img');
    modalImage.src = imageSrc;
    modalContent.appendChild(modalImage);
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = '1'; // Плавное появление
    }, 50);
}

// Закрытие модального окна
closeButton.addEventListener('click', () => {
    modal.style.opacity = '0'; // Плавное исчезновение
    setTimeout(() => {
        modal.style.display = 'none';
        modalContent.removeChild(modalContent.lastChild); // Убираем изображение
    }, 300);
});
