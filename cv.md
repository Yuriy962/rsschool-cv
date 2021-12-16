# Yuriy Buranov

<img src="assets/avatar.jpg" width="500" />

## Contacts

|__phone__   | [8 (917) 819-20-62](tel:+79178192062)          |
|-------------|------------------------------------------------|
| __email__   | [Yura962Bur@mail.ru](mailto:Yura962Bur@mail.ru)|
| __discord__ | Юрий Буранов #5146							   |
| __telegram__| [t.me/yura962bur](https://t.me/yura962bur)     |
| __github__  | [Yuriy962](https://github.com/Yuriy962)        |

## Summary
Hello!  
My name is Yuriy, and I'm from Samara. I'm 24.  
I work as web-developer about 2 years. First of all, I worked with PHP and some CMS as Bitrix, ModX, Joomla (etc). But always my goal has been career development in frontend development. Thereby I learned HTML, CSS, JavaScript(including jQuery) and became layout specialist.

My strong points are responsibility, purposefulness, pedantry. And I have good analytical skills and clear goal - i want to become strong front-end developer in the world of web-development. 

## Skills
* HTML, BEM;
* CSS, bootstrap, SASS, SCSS;
* Figma (the basics);
* JavaScript (the basics), jQuery;
* Gulp;
* PHP (the basics);
* 1C-Bitrix, ModX, Joomla.

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

| Dates| Official place |
|---------------------------|-------------------------|
| December 2020 - Present   | LLC "SEO-PROSTOR"       |
| July 2020 - November 2020 | LLC "PROSTIE RESHENIYA" |
| September 2019 - May 2020 | LLC "Relevant Media"    |

## Education

### __Online learning__

| Year | Education |
|------------|--------------------------|
| 2019       | Web-developer, udemy.com |

### __Higher education__

| Year | Education |
|------------|---------------------------------------------------------------------|
|2015 - 2019| SSTU, Institute of Automation and Information Technology, programmer |
|2016 - 2019| SSTU, Institute of Additional Distance Technology, media translator  |


## English
Pre-intermediate (A2)