const showperiodos = () => {
    const mostrarPeriodosBloque = document.getElementById("mostrarperiodos");
    mostrarPeriodosBloque.innerHTML = "";

    let resultText = "<h2>Lista de Periodos:</h2>";
    resultText += '<table class="table table-bordered">';
    resultText += '<thead><tr><th>ID</th><th>Código</th><th>Año</th><th>Semestre</th></tr></thead><tbody>';

    periodos.forEach(periodo => {
        resultText += `
            <tr>
                <td>${periodo.id}</td>
                <td>${periodo.codigo}</td>
                <td>${periodo.ano}</td>
                <td>${periodo.semestre}</td>
            </tr>
        `;
    });

    resultText += '</tbody></table>';
    mostrarPeriodosBloque.innerHTML = resultText;
    listadoperiodoss.style.display = "block";
};