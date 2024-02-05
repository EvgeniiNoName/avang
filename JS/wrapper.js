// Получение элементов управления слайдером
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

// Получение элементов слайдера
const sliderTrack = document.querySelectorAll(".slider-track")[0];
const sliderItems = document.querySelectorAll(".slider-item");

// Получение стилей первого элемента слайдера
const styles = window.getComputedStyle(sliderItems[0]);

// Определение длины коллекции слайдов
let length = sliderItems.length;

// Индекс текущего слайда
let currentIndex = 0;

// Функция для обновления положения слайдов в слайдере
function updateSlider(currentIndex) {

    // Вычисление новой позиции слайдов
    const newPosition = -currentIndex * (sliderItems[0].offsetWidth + parseInt(styles.margin) * 2);

    // Применение трансформации для каждого слайда
    sliderItems.forEach((item) => {
        item.style.transform = `translateX(${newPosition}px)`;
    });
}


// Обработчик события для кнопки "Next"
nextButton.addEventListener("click", function () {
    if (currentIndex === (length - 3)) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    updateSlider(currentIndex, sliderItems);
});

// Обработчик события для кнопки "Previous"
prevButton.addEventListener("click", function () {
    if (currentIndex === 0) {
        currentIndex = length - 3;
    } else {
        currentIndex--;
    }
    updateSlider(currentIndex, sliderItems);
});
