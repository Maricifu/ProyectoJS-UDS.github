// Definición de rutas y contenido de cada sección
const routes = {
    home: `<img src="/resources/uds.png" style="width: 30vw; height: auto; margin-bottom: 50px;"><p style="font-size: 1.3rem;">En la UDS estamos comprometidos con el desarrllo integral de nuestros estudiantes.</p><img src="/resources/coding.svg" style="width: 25vw; height: auto;">`,
};

// Función para cargar el contenido de la ruta especificada en el contenedor principal
function loadContent(route) {
    const container = document.getElementById('main-content');
    container.innerHTML = routes[route];
}

// Manejador de eventos para los elementos del menú
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu__itemm');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const route = this.dataset.route;
            loadContent(route); // Cargar el contenido de la nueva página
        });
    });
});
