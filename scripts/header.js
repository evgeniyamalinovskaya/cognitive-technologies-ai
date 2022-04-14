//Бургерного меню

const headerMenuButton = document.querySelector('.header__menu-button');
const headerBurger = document.querySelector('.header__burger');
const headerBurgerCloseButton = document.querySelector('.header__burger-close');

// Функция открытия бургерного меню и закрытия главного меню

headerMenuButton.addEventListener('click', function (event) {
    headerBurger.classList.add('header__burger_opened');
});

headerMenuButton.addEventListener('click', function (event) {
    headerBurger.classList.remove('header__container_hidden');
});

// Функция закрытия бургерного меню и открытия главного меню

headerBurgerCloseButton.addEventListener('click', function (event) {
    headerBurger.classList.add('header__container_hidden');

});
headerBurgerCloseButton.addEventListener('click', function (event) {
    headerBurger.classList.remove('header__burger_opened');
});

//добавлять/убирать класс для нужных элементов(при нажатии на Образование добавляется Магистратура и Аспирантура)

const menuItem = document.getElementById('education-item');
const classAddEducation = document.querySelector('.header__link_add');
const menuClass = document.querySelector('.dropdown-menu');
const liClass = document.querySelector('.header__li');


menuItem.addEventListener('click', function () {
    // menuClass.classList.add('header__link_add');

    console.log(this)
    const subItem = this.querySelector('.dropdown-menu');

    console.log(subItem)

    subItem.style.display = "flex"
});

// education.addEventListener('click', function () {
//     menuClass.classList.remove('header__link_add');
// })

