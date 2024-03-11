function calcularTotalMatriculasPorPeriodo(matriculas, periodos) {
    const totalMatriculasPorPeriodo = {};

    matriculas.forEach(matricula => {
        const periodoId = matricula.periodo_id;
        const precio = matricula.precio;

        if (!totalMatriculasPorPeriodo[periodoId]) {
            totalMatriculasPorPeriodo[periodoId] = 0;
        }

        totalMatriculasPorPeriodo[periodoId] += precio;
    });

    return totalMatriculasPorPeriodo;
}

function mostrarResultadosEnTexto(matriculas, periodos) {
    const totalMatriculasPorPeriodo = calcularTotalMatriculasPorPeriodo(matriculas, periodos);
    const resultadosContainer = document.getElementById('tablaResultados');
    resultadosContainer.innerHTML = ""; 

    let resultText = '<h2>Resultados:</h2>';

    // Use forEach to iterate over periods
    resultText += '<table class="table table-bordered">';
    resultText += '<thead><tr><th>Periodo</th><th>Total Matrículas</th></tr></thead><tbody>';

    periodos.forEach(periodo => {
        const periodoId = periodo.id;
        const total = totalMatriculasPorPeriodo[periodoId] || 0;
        resultText += `<tr><td>${periodoId}</td><td>${total}</td></tr>`;
    });

    resultText += '</tbody></table>';
    resultadosContainer.innerHTML = resultText;
}


function mostrarAsignaturasMasMatriculadasEnHTML(matriculas, asignaturas) {
    let asignaturasMasMatriculadas = [];
    let maxMatriculas = 0;

    // Itera sobre la lista de asignaturas
    for (const asignatura of asignaturas) {
        let matriculasAsignatura = matriculas.filter(matricula => matricula.asignatura_id === asignatura.id).length;

        // Actualiza las asignaturas más matriculadas si es necesario
        if (matriculasAsignatura > maxMatriculas) {
            maxMatriculas = matriculasAsignatura;
            asignaturasMasMatriculadas = [asignatura];
        } else if (matriculasAsignatura === maxMatriculas) {
            asignaturasMasMatriculadas.push(asignatura);
        }
    }

    // Muestra el resultado en el HTML
    const resultadoHTML = document.getElementById("resultadoAsignaturasMasMatriculadas");
    resultadoHTML.innerHTML = "";

    if (asignaturasMasMatriculadas.length > 0) {
        const asignaturasHTML = asignaturasMasMatriculadas.map(asignatura => `<li>${asignatura.codigo}</li>`).join('');
        resultadoHTML.innerHTML = `<h2>Las asignaturas más matriculadas son:</h2><ul>${asignaturasHTML}</ul>`;
    } else {
        resultadoHTML.innerHTML = "<p>No hay asignaturas matriculadas actualmente.</p>";
    }
}



function imprimirMatricula(estudianteId) {
    const matriculasEstudiante = matriculas.filter(matricula => matricula.estudiante_id === estudianteId);
    const resultadoHTML = document.getElementById("resultadoMatricula");

    if (matriculasEstudiante.length > 0) {
        let resultText = "<h2>Horario de Clases:</h2>";
        resultText += '<table class="table table-bordered">';
        resultText += '<thead><tr><th>Asignatura</th><th>Día</th><th>Hora</th><th>Salón ID</th></tr></thead><tbody>';

        matriculasEstudiante.forEach(matricula => {
            const asignatura = asignaturazz.find(asignatura => asignatura.id === matricula.asignatura_id);

            if (asignatura) {
                asignatura.horario_clases.forEach(horario => {
                    resultText += `
                        <tr>
                            <td>${asignatura.codigo}</td>
                            <td>${horario.dia}</td>
                            <td>${horario.hora} </td>
                            <td>${horario.salon_id}</td>
                        </tr>
                    `;
                });
            }
        });

        resultText += '</tbody></table>';
        resultadoHTML.innerHTML = resultText;
    } else {
        resultadoHTML.innerHTML = `<p>No se encontraron matrículas para el estudiante con ID ${estudianteId}.</p>`;
    }
}


const Genrarhorarioforzm = () => {
    const horarioform = document.getElementById("reportehorario");

    horarioform.innerHTML = "";
    horarioform.innerHTML = `
        <form id="formularioestudiante">
            <h4>Generar horario de un estudiante por ID</h4>
            <label for="inputidhorario">ID</label>
            <input type="number" class="form-control" id="inputidhorario" placeholder="ID">
            <div id="BuscarID">
                <button type="button" class="btn btn-primary" onclick="imprimirMatricula(
                    document.getElementById('inputidhorario').value);">
                    Buscar
                </button>
            </div>
        </form>
        <div id="resultadoMatricula"></div> <!-- Aquí se mostrarán los resultados -->
    `;
};



// Ejemplo de uso (suponiendo que ya tienes definidos los arrays alumnos, matriculas, asignaturas y salones)