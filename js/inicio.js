// Definición de rutas y contenido de cada sección
const routes = {
    home: `<img src="/resources/uds.png" style="width: 38vw; height: auto; margin-bottom: 50px;"><p>En la UDS estamos comprometidos con el desarrllo integral de nuestros estudiantes.</p>`,
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
            const route = this.getAttribute('data-route');
            loadContent(route);
        });
    });
});
