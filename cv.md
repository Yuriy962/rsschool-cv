# Yuriy Buranov


 ## Contacts

| __phone__  | [8 (917) 819-20-62](tel:+79178192062)          |
|------------|------------------------------------------------|
| __email__  | [Yura962Bur@mail.ru](mailto:Yura962Bur@mail.ru)|
|__discord__ | Юрий Буранов #5146							  |
|__telegram__| [t.me/yura962bur](https://t.me/yura962bur)     |
|__github__  | [Yuriy962](https://github.com/Yuriy962)        |



## Summary


## Skills
* HTML, BEM;
* CSS, bootstrap;
* SASS, SCSS;
* Figma (the basics);
* JavaScript (the basics), jQuery;
* Gulp;
* PHP (the basics);
* 1C-Bitrix, ModX, Joomla;

## Example of My Code
    The fragment of HTML and JS code for menu of landing page.  
__HTML__
```html
    <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <nav class="menu">
        <ul class="menu__list">
            <li class="menu__item">
                <a href="#why" class="menu__link">Почему ALL-ON-4</a>
            </li>
            <li class="menu__item">
                <a href="#price" class="menu__link">Что входит в стоимость</a>
            </li>
            <li class="menu__item">
                <a href="#certificates" class="menu__link">Сертификаты</a>
            </li>
            <li class="menu__item">
                <a href="#contacts" class="menu__link">Контакты</a>
            </li>
        </ul>
    </nav>
```
__JavaScript__
``` javascript
	// open and close mobile menu
    const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger'),
    menuItem = document.querySelectorAll('.menu__item');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger--active');
        menu.classList.toggle('menu--active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger--active');
            menu.classList.remove('menu--active');
        });
    });
```

## Experience


## Education


## English
