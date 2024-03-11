const showdepartamentos = () => {
    const mostrarDepartamentosBloque = document.getElementById("mostrardepartamentos");
    mostrarDepartamentosBloque.innerHTML = "";

    let resultText = "<h2>Lista de Departamentos:</h2>";
    resultText += '<table class="table table-bordered">';
    resultText += '<thead><tr><th>ID</th><th>Nombre</th></tr></thead><tbody>';

    datosDepartamentos.forEach(departamento => {
        resultText += `
            <tr>
                <td>${departamento.id}</td>
                <td>${departamento.nombre}</td>
            </tr>
        `;
    });

    resultText += '</tbody></table>';
    mostrarDepartamentosBloque.innerHTML = resultText;
    listadodepartamentos.style.display = "block";
};