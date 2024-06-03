const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('grey')
});

let count = 1;
document.getElementById("radio-index-1").checked = true;

setInterval(function () {
    nextImage();
}, 2000)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById("radio-index-" + count).checked = true;
}

// Função para abrir e fechar o modal de registro
const toggleRegisterModal = () => {
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

// Função para mostrar e ocultar a senha no modal de registro
const togglePasswordVisibility = () => {
    const password = document.getElementById('password');
    const icon = document.getElementById('icon');
    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        icon.classList.add('hide');
    } else {
        password.setAttribute('type', 'password');
        icon.classList.remove('hide');
    }
};

// Função para fechar o modal de registro
const closeRegisterModal = () => {
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");
    [modal, fade].forEach((el) => el.classList.add("hide"));
};

// Função para abrir e fechar o modal de login
const toggleLoginModal = () => {
    const modalLogin = document.querySelector("#modal-login");
    const fadeLogin = document.querySelector("#fade-login");
    [modalLogin, fadeLogin].forEach((el) => el.classList.toggle("hide-login"));
};

// Função para mostrar e ocultar a senha no modal de login
const toggleLoginPasswordVisibility = () => {
    const passwordLogin = document.getElementById('password-login');
    const iconLogin = document.getElementById('icon-login');
    if (passwordLogin.type === 'password') {
        passwordLogin.setAttribute('type', 'text');
        iconLogin.classList.add('hide');
    } else {
        passwordLogin.setAttribute('type', 'password');
        iconLogin.classList.remove('hide');
    }
};

// Função para fechar o modal de login
const closeLoginModal = () => {
    const modalLogin = document.querySelector("#modal-login");
    const fadeLogin = document.querySelector("#fade-login");
    [modalLogin, fadeLogin].forEach((el) => el.classList.add("hide-login"));
};

// Event Listeners
document.querySelector("#open-modal").addEventListener("click", toggleRegisterModal);
document.querySelector("#close-modal").addEventListener("click", closeRegisterModal);
document.querySelector("#icon").addEventListener("click", togglePasswordVisibility);

document.querySelector("#open-login-modal").addEventListener("click", toggleLoginModal);
document.querySelector("#close-login-modal").addEventListener("click", closeLoginModal);
document.querySelector("#icon-login").addEventListener("click", toggleLoginPasswordVisibility);

const changeLogo = () => {
    const logosOriginal = document.querySelectorAll('.logo-original');
    const logosAlternate = document.querySelectorAll('.logo-alternate');
    const mq = window.matchMedia('(max-width: 750px)');

    const changeLogo = () => {
        if (mq.matches) {
            logosOriginal.forEach(logo => logo.style.display = 'none');
            logosAlternate.forEach(logo => logo.style.display = 'block');
        } else {
            logosOriginal.forEach(logo => logo.style.display = 'block');
            logosAlternate.forEach(logo => logo.style.display = 'none');
        }
    };

    changeLogo();

    mq.addEventListener('change', changeLogo);
};

changeLogo();

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {

    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el , i) => {
            el.classList.add(`gallery-item-${i+1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className == 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }

}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();

