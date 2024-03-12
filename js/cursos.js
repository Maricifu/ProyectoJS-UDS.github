const showCursos = () => {
    const mostrarcursos = document.getElementById("mostrarCursos");

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