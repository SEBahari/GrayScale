const navbar = document.getElementById('navbar');

if (window.innerWidth < 992) {                      //  mobile
    navbar.classList.add('navbar-light');
} else {
    checkNavSize();
}

window.onresize = () => {
    if (window.innerWidth < 992) {                  //  mobile
        navbar.style.height = null;
        navbar.style.minHeight = '4rem';
        navbar.style.backgroundColor = '#fff';
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
    } else {                                        //  desktop
        checkNavSize();
    }
};

document.onscroll = function () {
    checkNavSize();
};

function checkNavSize() {
    if (window.innerWidth > 992) {
        navbar.style.minHeight = null;
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > 0) {
            notInTop();
        } else {
            inTop();
        }
    }
}

function inTop() {
    console.log('top');
    navbar.style.height = '5rem';
    navbar.style.backgroundColor = 'transparent';
    navbar.classList.remove('navbar-light');
    navbar.classList.add('navbar-dark');
}

function notInTop() {
    console.log('not in top');
    navbar.style.height = '3rem';
    navbar.style.backgroundColor = '#fff';
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light');
}
