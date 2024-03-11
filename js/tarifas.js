const showtarifas = () => {
    const mostrarTarifasBloque = document.getElementById("mostrartarifas");
    mostrarTarifasBloque.innerHTML = "";

    let resultText = "<h2>Lista de Tarifas:</h2>";
    resultText += '<table class="table table-bordered">';
    resultText += '<thead><tr><th>ID</th><th>Costo Crédito</th><th>Periodo ID</th><th>Programa ID</th></tr></thead><tbody>';

    tarifas.forEach(tarifa => {
        resultText += `
            <tr>
                <td>${tarifa.id}</td>
                <td>${tarifa.costo_credito}</td>
                <td>${tarifa.periodo_id}</td>
                <td>${tarifa.programa_id}</td>
            </tr>
        `;
    });

    resultText += '</tbody></table>';
    mostrarTarifasBloque.innerHTML = resultText;
    listadotarifass.style.display = "block";
};