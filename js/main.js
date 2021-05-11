const navbar = document.getElementById('navbar');

if (window.innerWidth < 992) {
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light');
}

window.onresize = () => {
    if (window.innerWidth < 992) {
        navbar.style.height = '4rem';
        navbar.style.backgroundColor = '#fff';
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
    } else if (window.pageYOffset <= 40) {
        navbar.style.backgroundColor = 'transparent';
        navbar.classList.remove('navbar-light');
        navbar.classList.add('navbar-dark');
    }
};

document.onscroll = function () {
    if (window.innerWidth > 992) {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > 0) {
            navbar.style.height = '3rem';
            navbar.style.backgroundColor = '#fff';
            navbar.classList.remove('navbar-dark');
            navbar.classList.add('navbar-light');
        } else {
            navbar.style.height = '5rem';
            navbar.style.backgroundColor = 'transparent';
            navbar.classList.remove('navbar-light');
            navbar.classList.add('navbar-dark');
        }
    }
};