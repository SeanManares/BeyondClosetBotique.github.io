/*the default href=# when click will make me go at the top of the webpage that's why I used id=home-refresh to add preventDefault and instead have a location reload which reloads my webpage manually */
document.getElementById('home-refresh').addEventListener('click', function(e) {      /*addEventListener create this custom response which is when click by the user it will call the function */
    e.preventDefault();     /*(preventDefault) stops the default which is scrolling in the webpage when the link is click */
    location.reload();      /*instead of the default, it will reload the page */
});


window.addEventListener('scroll', function () {      /*the addEventListener creates a custom response which when the user scrolls it will call the function */
    const nav = document.querySelector('.nav-wrap');       /*const makes the variable unchangeable, query selector calls the css .nav-wrap */
    if (window.scrollY > 50) {             /*this adds a true value which if the window's is scrolled 50px vertically, it will automatically activate the .scrolled in css */
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');     /*if the user go back at the top, it will remove the .scrolled */
    }
});