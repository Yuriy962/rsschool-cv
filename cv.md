# Yuriy Buranov

<img src="assets/avatar.jpg" width="500" />

## Contacts

| __phone__   | [8 (917) 819-20-62](tel:+79178192062)          |
|-------------|------------------------------------------------|
| __email__   | [Yura962Bur@mail.ru](mailto:Yura962Bur@mail.ru)|
| __discord__ | Юрий Буранов #5146							   |
| __telegram__| [t.me/yura962bur](https://t.me/yura962bur)     |
| __github__  | [Yuriy962](https://github.com/Yuriy962)        |

## Summary
Hello!  
My name is Yuriy, and I'm from Samara. I'm 24.  
I work as web-developer about 2 year. Primarily, I worked with PHP and some CMS as Bitrix, ModX, Joomla (etc). But always my goal has been career development in frontend development. Thereby I learned HTML, CSS, JavaScript(including jQuery) and became layout specialist.

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
```scss
    .menu{
        &__list{
            list-style: none;
            display: flex;
            align-items: center;
            margin: 0;
            padding-left: 0;
        }
        &__item{
            font-size: 1.15rem;
            margin: 0 15px;
            font-weight: 400;
        }
        &__link{
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
            &:hover{
                &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    height: 3px;
                    width: 100%;
                    background-color: $pink;
                    bottom: -2px;
                }
            }
        }
        @media(max-width: 1350px) {
            &__item {
                font-size: 1rem;
                margin: 0 10px;
            }
        }
        @media(max-width: 1199px) {
            margin: 0 auto;
            &__item {
                margin: 0 8px;
            }
        }
        @media (max-width: 991px) {
            position: fixed;
            z-index: 50;
            left: -100%;
            right: 0;	
            top: 90px;
            bottom: -80px;
            width: 100%;
            height: 100vh;
            transition: left ease-in-out 0.3s;
            background-color: $grey;
            display: inline-flex;
            justify-content: center;
            margin: 0;
            padding: 57px 20px 20px;
            &--active{
                left: 0;
            }
            &__list{
                flex-direction: column;
                align-items: center;
                height: auto;
            }
            &__item{
                margin-bottom: 40px;
                height: auto;
            }
            a.menu__link{
                color: #fff;
                font-size: 19px;
                position: relative;
            }
        }
    }

.hamburger{
	display: none;
	width: 32px;
	span{
		display: block;
		background-color: #fff;
		height: 4px;
		margin-bottom: 5px;
		transition: transform .3s;
	}
	&--active{
		transition: all .3s;
		span{
			&:first-child{
				margin-bottom: -4px;
				transform: translateY(0) rotate(-45deg);
			}
			&:nth-child(2){
				display: none;
			}
			&:last-child{
				transform: translateY(0) rotate(45deg);
			}
		}
	}
	@media (max-width: 991px) {
		display: inline-block;
	}
}

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
| Dates | Official place |
|------------|----------------|
| December 2020 - Present | LLC "SEO-PROSTOR"|
| Jule 2020 - November 2020 | LLC "PROSTIE RESHENIYA" |
| September 2019 - May 2020 | LLC "Relevant Media" |

## Education

### __Online learning__
| Year | Education |
|------------|----------------|
| 2019 | Web-developer, udemy.com |

### __Higher education__
| Year | Education |
|------------|----------------|
|2015 - 2019| SSTU, Institute of Automation and Information Technology, programmer |
|2016 - 2019| SSTU, Institute of Additional Distance Technology, media translator |


## English
Pre-intermediate/Intermediate (A2/B1)