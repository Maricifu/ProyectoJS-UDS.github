const showProgramas = () => {
    const mostrarProgramasBloque = document.getElementById("mostrarprogramas");
    mostrarProgramasBloque.innerHTML = "";

    let resultText = "<h2>Lista de Programas:</h2>";
    resultText += '<table class="table table-bordered">';
    resultText += '<thead><tr><th>ID</th><th>Nombre</th><th>Nivel</th></tr></thead><tbody>';

    programas.forEach(programa => {
        resultText += `
            <tr>
                <td>${programa.id}</td>
                <td>${programa.nombre}</td>
                <td>${programa.nivel}</td>
            </tr>
        `;
    });

    resultText += '</tbody></table>';
    mostrarProgramasBloque.innerHTML = resultText;
    listadoprogramass.style.display = "block";
};