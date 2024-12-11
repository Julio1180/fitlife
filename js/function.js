
// Función para verificar si un elemento está en la vista
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Agregar la clase 'visible' cuando los elementos estén en la vista
window.addEventListener('scroll', function () {
    const elementos = document.querySelectorAll('#bienvenida, #servicios, #galeria, #contacto, .servicio, .form-contacto, .imagenes img');
    elementos.forEach(function (elemento) {
        if (isInViewport(elemento)) {
            elemento.classList.add('visible');
        }
    });
});

// Llamar la función para animaciones al cargar la página
window.addEventListener('load', function () {
    const elementos = document.querySelectorAll('#bienvenida, #servicios, #galeria, #contacto, .servicio, .form-contacto, .imagenes img');
    elementos.forEach(function (elemento) {
        if (isInViewport(elemento)) {
            elemento.classList.add('visible');
        }
    });
});



// Obtener elementos del DOM
var modal = document.getElementById("miModal");
var btnAbrir = document.getElementById("abrirModal");
var btnCerrar = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace clic en el botón, abrir el modal
btnAbrir.onclick = function () {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en la "X", cerrar el modal
btnCerrar.onclick = function () {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, también lo cierra
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

