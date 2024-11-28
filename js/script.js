const botaoMenu = document.querySelector('.menu_hamburguer');
const menu = document.querySelector('.menu');

botaoMenu.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.toggle("menu-aberto");

    if (menu.classList.contains('menu-aberto')) {
        const spans = botaoMenu.querySelectorAll('span');
        for (let i = 0; i < spans.length; i++) {
            if(i == 0) {
                spans[i].id = "span-menuOne";
            } else if(i == 1) {
                spans[i].id = "span-menuTwo";
            } else if(i == 2) {
                spans[i].id = "span-menuThree";
            }
        }
    } else {
        const spans = botaoMenu.querySelectorAll('span');
        for (let i = 0; i < spans.length; i++) {
            spans[i].removeAttribute('id');
        }
    }
});
