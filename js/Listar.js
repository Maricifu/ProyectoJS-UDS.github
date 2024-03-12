
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


const showcursos = () => {
    const mostrarcursos = document.getElementById("mostrarcursos");

    mostrarcursos.innerHTML = "";

    const div = document.createElement("div");
    div.classList.add("listadocursos");
    div.innerHTML = "<h2>Lista de cursos:</h2>";

    cursos.forEach(curso => {
        div.innerHTML += `
            <p>
                <strong>ID:</strong> ${curso.id} <br>
                <strong>Nombre:</strong> ${curso.nombre} <br>
                <strong>Codigo:</strong> ${curso.codigo} <br>
                <strong>Guia catedra:</strong> ${curso.guia_catedra} <br>
            </p>
        `;
    });

    // Agregar el div al elemento mostrarasignaturas
    mostrarcursos.appendChild(div);
    listadocursoss.style.display="block";

};

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