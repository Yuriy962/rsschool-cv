let burger = document.querySelector('.hamburger'),
    menu = document.querySelector('.nav'),
    menuItem = document.querySelectorAll('.nav-item, .nav-link'),
    scrollTop = document.body.scrollTop;
    
    burger.addEventListener('click', () => {
        burger.classList.toggle('hamburger--active');
        menu.classList.toggle("nav--active");
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.remove('hamburger--active');
            menu.classList.remove('nav--active');
        });
    });
