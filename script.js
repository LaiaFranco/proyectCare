document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentSlideIndex = 0;
    const totalSlides = slides.length;

    // Función para actualizar la UI según el slide actual
    function updateSlide(newIndex) {
        // Remover clases activas
        slides[currentSlideIndex].classList.remove('active');
        dots[currentSlideIndex].classList.remove('active');

        // Actualizar índice
        currentSlideIndex = newIndex;

        // Añadir clases activas al nuevo
        slides[currentSlideIndex].classList.add('active');
        dots[currentSlideIndex].classList.add('active');

        // Actualizar estado de los botones
        prevBtn.disabled = currentSlideIndex === 0;
        nextBtn.disabled = currentSlideIndex === totalSlides - 1;
    }

    // Event Listeners Botones
    prevBtn.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            updateSlide(currentSlideIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlideIndex < totalSlides - 1) {
            updateSlide(currentSlideIndex + 1);
        }
    });

    // Event Listeners Dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if(index !== currentSlideIndex) {
                updateSlide(index);
            }
        });
    });

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'Space') {
            if (currentSlideIndex < totalSlides - 1) {
                updateSlide(currentSlideIndex + 1);
            }
        } else if (e.key === 'ArrowLeft') {
            if (currentSlideIndex > 0) {
                updateSlide(currentSlideIndex - 1);
            }
        }
    });
});
