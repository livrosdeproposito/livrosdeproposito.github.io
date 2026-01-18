// Sidebar recolhível
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
}

// Carrossel automático
const slides = document.querySelectorAll('.carousel img');
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);
