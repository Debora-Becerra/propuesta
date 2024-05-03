// Contadores animados
function animateCounters() {
    const counters = document.querySelectorAll('.counter span'); // Selecciona el span dentro de .counter
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const step = target / 100;
        let count = 0;
        
        const updateCounter = () => {
            count += step;
            if (count < target) {
                counter.textContent = count.toFixed(1);
                setTimeout(updateCounter, 20); // Velocidad de animación (ms)
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Llamar a la función para iniciar la animación cuando el contenido HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', animateCounters);

