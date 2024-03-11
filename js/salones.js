const showsalones = () => {
    const mostrarSalonesBloque = document.getElementById("mostrarsalones");
    mostrarSalonesBloque.innerHTML = "";

    let resultText = "<h2>Lista de Salones:</h2>";
    resultText += '<table class="table table-bordered">';
    resultText += '<thead><tr><th>ID</th><th>Capacidad de Alumnos</th><th>Edificio</th><th>Piso</th><th>Número de Identificación</th></tr></thead><tbody>';

    salones.forEach(salon => {
        resultText += `
            <tr>
                <td>${salon.id}</td>
                <td>${salon.capacidad_alumnos}</td>
                <td>${salon.edificio}</td>
                <td>${salon.piso}</td>
                <td>${salon.numero_identificacion}</td>
            </tr>
        `;
    });

    resultText += '</tbody></table>';
    mostrarSalonesBloque.innerHTML = resultText;
    listadosaloness.style.display = "block";
};