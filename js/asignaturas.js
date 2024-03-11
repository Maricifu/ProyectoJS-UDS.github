const formularioasignaturas= document.querySelector("#formularioasignaturas");
const mostrarasignaturas= document.querySelector("#mostrarasignaturas");
const asignaturasearchid= document.querySelector("#buscarmatriculasporid");
const asignaturadelete= document.querySelector("#BorrarMatriculasPorId");

function llenarFormularioCursos(cursos) {
    const inputIdAsignatura = document.getElementById("Inputidcursoasignatura");
    inputIdAsignatura.innerHTML = "<option selected>Cursos</option>";

    cursos.forEach(curso => {
        const option = document.createElement("option");
        option.value = curso.id;
        option.text = curso.nombre;
        inputIdAsignatura.appendChild(option);
    });
  }
  function llenarFormularioProfesoresformulario(teachers) {
    const inputIdprofe = document.getElementById("InputidProfesorasignatura");
    inputIdprofe.innerHTML = "<option selected>Profes</option>";
  
    teachers.forEach(profes => {
      const option = document.createElement("option");
      option.value = profes.id;
      option.text = profes.nombre;
      inputIdprofe.appendChild(option);
    });
  }

  function llenarFormularioProgramasasignaturas(programas) {
    const inputIdPrograma = document.getElementById("InputidprogramaAsignatura");
    inputIdPrograma.innerHTML = "<option selected>Programas</option>";
  
    programas.forEach(programa => {
      const option = document.createElement("option");
      option.value = programa.id;
      option.text = programa.nombre;
      inputIdPrograma.appendChild(option);
    });
  }
  function llenarFormularioSalonesasignaturas(salones) {
    const inputidsalon = document.getElementById("InputSalon");
    inputidsalon.innerHTML = "<option selected>Salones</option>";
  
    salones.forEach(salon => {
      const option = document.createElement("option");
      option.value = salon.id;
      option.text = salon.numero_identificacion;
      inputidsalon.appendChild(option);
    });
  }

class Asignatura {
    constructor(id, curso_id, codigo, creditos, profesor_id, cupos_disponibles, programa_id, horario_clases){
        this.id = id;
        this.curso_id = curso_id;
        this.codigo = codigo;
        this.creditos = creditos;
        this.profesor_id = profesor_id;
        this.cupos_disponibles = cupos_disponibles;
        this.programa_id = programa_id;
        this.horario_clases = horario_clases;
    }
}

const showAsignaturas = () => {
  const mostrarAsignaturasBloque = document.getElementById("mostrarasignaturas");
  mostrarAsignaturasBloque.innerHTML = "";

  let resultText = "<h2>Lista de Asignaturas:</h2>";
  resultText += '<table class="table table-bordered">';
  resultText += '<thead><tr><th>ID</th><th>Curso ID</th><th>Código</th><th>Créditos</th><th>Profesor ID</th><th>Cupos Disponibles</th><th>Programa ID</th><th>Horarios de Clases</th></tr></thead><tbody>';

  asignaturazz.forEach(asignaturaz => {
      resultText += `
          <tr>
              <td>${asignaturaz.id}</td>
              <td>${asignaturaz.curso_id}</td>
              <td>${asignaturaz.codigo}</td>
              <td>${asignaturaz.creditos}</td>
              <td>${asignaturaz.profesor_id}</td>
              <td>${asignaturaz.cupos_disponibles}</td>
              <td>${asignaturaz.programa_id}</td>
              <td>
                  ${asignaturaz.horario_clases.map(horario => `
                      ${horario.dia} de ${horario.hora} en el salón ${horario.salon_id}<br>
                  `).join('')}
              </td>
          </tr>
      `;
  });

  resultText += '</tbody></table>';
  mostrarAsignaturasBloque.innerHTML = resultText;
  ListarAsignaturas.style.display = "block";
};



const formularioAsignaturas= ()=>{
  formularioasignaturas.innerHTML="";
  const div= document.createElement("div");
  div.classList.add("FormularioCrearAsignaturas");
  div.innerHTML=`
  
  <form id="FormularioAsignatura">
  <h4>Asignatura</h4>

          <label for="InputIdAsignatura">ID</label>
          <input type="number" class="form-control" id="InputIdAsignatura" placeholder="ID">

      <label for="Inputidcursoasignatura">Curso ID</label>
      <select id="Inputidcursoasignatura" class="form-control">
        <option selected>Cursos...</option>
        
        <option>1</option>
        
      </select>

          <label for="InputCreditos">Créditos</label>
          <input type="number" class="form-control" id="InputCreditos" placeholder="Créditos">

      <label for="InputidProfesorasignatura">Profesor</label>
      <select id="InputidProfesorasignatura" class="form-control">
        <option selected>Profesores...</option>
        
        <option>1</option>
        
      </select>

    <label for="Inputcuposdiponibles">Cupos disponibles</label>
    <input type="number" class="form-control" id="Inputcuposdiponibles" placeholder="Créditos">

      <label for="InputidprogramaAsignatura">Programas ID</label>
      <select id="InputidprogramaAsignatura" class="form-control">
        <option selected>Programas</option>
        
        <option>1</option>
        
      </select>

      <label for="InputDia">Dias</label>
              <select id="InputDia" class="form-control">
                <option selected>Dias</option>
                <option>Lunes</option>
                <option>Martes</option>
                <option>Miercoles</option>
                <option>Jueves</option>
                <option>Viernes</option>
                <option>Sabado</option>
              </select>
        
              <label for="InputHora">Horas</label>
              <select id="InputHora" class="form-control">
                <option selected>Horas</option>
                <option>6:00am-8:00am</option>
                <option>8:00am-10:00am</option>
                <option>10:00am-12:00pm</option>
                <option>12:00am-2:00am</option>
              </select>
       
      <label for="InputSalon">Salones</label>
      <select id="InputSalon" class="form-control">
        <option selected>Salon</option>
        
        <option>1</option>
        
      </select>
  <div id="botonsubir">
      <button id="submitBtn" class="btn btn-primary" onclick="submitAsignatura();">Crear</button>
  </div>
</form>
`;
formularioasignaturas.appendChild(div)
}

const existeasignaturaconID = (id) => {
  return asignaturazz.some(asignatura => asignatura.id === id);
};

const existeAsignaturaEnHorario = (asignaturazz, dia, hora, salon) => {
  return asignaturazz.some(asignatura =>
      asignatura.horario_clases.some(horario =>
          horario.dia === dia &&
          horario.hora === hora &&
          horario.salon_id === salon
      )
  );
};

const submitAsignatura = () => {
  const idz = document.getElementById("InputIdAsignatura").value;
  const cursoidz = document.getElementById("Inputidcursoasignatura").value;
  const codigoCursoz = cursoidz.codigo; // Corregido aquí
  const codigoz = `${ cursoidz.codigo}-PRE-2024`; // Corregido aquí
  const creditosz = document.getElementById("InputCreditos").value;
  const profesoridz = document.getElementById("InputidProfesorasignatura").value;
  const cuposdisponiblesz = document.getElementById("Inputcuposdiponibles").value; // Agregado .value
  const programaidz = document.getElementById("InputidprogramaAsignatura").value;
  const diaz = document.getElementById("InputDia").value;
  const horainicioz = document.getElementById("InputHora").value;
  const salonz = document.getElementById("InputSalon").value;    


  if (existeAsignaturaEnHorario(asignaturazz, diaz, horainicioz, salonz)) {
    alert('Ya existe una asignatura en ese día, hora y salón. Por favor, elige otro horario.');
    return;
  }

  const horarioClases = [{
    "dia": diaz,
    "hora": horainicioz,
    "salon_id": salonz
  }];

  if (
      idz === "" ||
      cursoidz === "Cursos" ||
      codigoz === "" ||
      creditosz === "" ||
      profesoridz === "Profes" ||
      cuposdisponiblesz === "" ||
      programaidz === "Programas" ||
      diaz === "Dias" ||
      horainicioz === "Horas" ||
      salonz === "Salones"
  ) {
      alert("Por favor llene todos los campos");
      return;
  }

  if (existeasignaturaconID(idz)) {
      alert(`Ya existe una asignatura con el ID ${idz}. Por favor, elige otro ID.`);
      return;
  }

  const newAsignatura = new Asignatura(
      idz,
      cursoidz,
      codigoz,
      creditosz,
      profesoridz,
      cuposdisponiblesz,
      programaidz,
      horarioClases
  );

  fetch("http://localhost:3000/asignaturas",{
      method:"POST",
      headers:{
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newAsignatura)
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("Asignatura agregada correctamente:", data);
    // Actualiza la lista de estudiantes en el frontend
  })
  .catch((error) => {
    console.error("Error al agregar la Asignatura:", error);
  });
}

const buscarAsignaturaPorId=(id)=>{
  const asignaturaencontrada= asignaturazz.find(asigna=> asigna.id === id)

  if (asignaturaencontrada){
    alert(`Asignatura encontrada:\nID: ${asignaturaencontrada.id}\nNombre: ${asignaturaencontrada.codigo}`);
  }else{
    alert(`Asignatura con ID ${id} no encontrado.`);
  }
}

const buscarasignaturaporidform=()=>{
  asignaturasearchid.innerHTML="";
  const div = document.createElement("div");
  div.classList.add("BuscarAsigporIDM");
  div.innerHTML=`
      <form id="Formuolariobuscarasig">
              <h4>Buscar Asignatura por ID</h4>
              <label for="Inputidasignatura">ID</label>
              <input type="number" class="form-control" id="Inputidasignatura" placeholder="ID">
              <div id="BuscarID">
              <button id="SubirID" class="btn btn-primary" onclick="buscarAsignaturaPorId(document.getElementById('Inputidasignatura').value);">Buscar</button>
              </div>
      </form>
  `
  asignaturasearchid.appendChild(div)
}

const deleteasignaturaByid=(id) =>{
  const index= asignaturazz.findIndex(asignaturaa=> asignaturaa.id === id);

  if(index!= -1){
    asignaturazz.splice(index,1);

    fetch(`http://localhost:3000/asignaturas/${id}`,{
          method:'DELETE',
  })
  .then(response=> response.json)
  .then(data=>{
    alert(`Asignatura con ID ${id} eliminado correctamente.`, data)
  })
  .catch(error=>{
    console.error(`Error al eliminar asignatura con ID ${id}:`, error)
  })
}else{
  alert(`Asignatura con ID ${id} no encontrado`)
}
}

const BorrarAsignaturaform=()=>{
  asignaturadelete.innerHTML="";
  const div = document.createElement("div");
  div.classList.add("BorrarAsigForm");
  div.innerHTML=`
  <form id="formularioBorrarasig">
              <h4>Borrar de asignatura por ID</h4>
              <label for="BorrarIDasig">ID</label>
              <input type="number" class="form-control" id="BorrarIDasig" placeholder="ID">
              <div id="BuscarID">
              <button id="SubirID" class="btn btn-primary" onclick="deleteasignaturaByid(document.getElementById('BorrarIDasig').value);">Borrar</button>
              </div>
  </form>
`
  asignaturadelete.appendChild(div)
}