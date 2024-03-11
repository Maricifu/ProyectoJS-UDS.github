const FormularioMatriculas= document.querySelector("#FormularioMatriculas");
const MostrarMatriculas = document.querySelector("#MostrarMatriculas");
const MatriculasSearchId= document.querySelector("#BuscarMatriculas");
const MatriculaDeleteId = document.querySelector("#BorrarMatriculaPorId");

function llenarEstudiantesMatriculas(estudiantes) {
    const inputIdEstudiantesmatriculas = document.getElementById("InputestudianteMatricula");
    inputIdEstudiantesmatriculas.innerHTML = "<option selected>Estudiantes...</option>";

    estudiantes.forEach(estudiante => {
        const option = document.createElement("option");
        option.value = estudiante.id;
        option.text = estudiante.nombre;
        inputIdEstudiantesmatriculas.appendChild(option);
    });
};

function LlenarasignaturasMatriculas(asignaturas) {
    const InputAsignaturasMatricula = document.getElementById("InputAsignaturaMatricula");
    InputAsignaturasMatricula.innerHTML = "<option selected>Asignaturas...</option>";

    asignaturas.forEach(asignatura => {
        const option = document.createElement("option");
        option.value = asignatura.id;
        option.text = asignatura.codigo;
        InputAsignaturasMatricula.appendChild(option);
    });
};

class Matricula {
    constructor(id, estudiante_id, asignatura_id, periodo_id, precio){
        this.id=id
        this.estudiante_id=estudiante_id
        this.asignatura_id=asignatura_id
        this.periodo_id= periodo_id
        this.precio=precio
    }
}

const showmatriculas = () => {
  const mostrarMatriculasBloque = document.getElementById("MostrarMatriculas");
  mostrarMatriculasBloque.innerHTML = "";

  let resultText = "<h2>Lista de Matrículas:</h2>";
  resultText += '<table class="table table-bordered">';
  resultText += '<thead><tr><th>ID</th><th>Estudiante ID</th><th>Asignatura ID</th><th>Precio</th></tr></thead><tbody>';

  matriculas.forEach(matricula => {
      resultText += `
          <tr>
              <td>${matricula.id}</td>
              <td>${matricula.estudiante_id}</td>
              <td>${matricula.asignatura_id}</td>
              <td>${matricula.precio}</td>
          </tr>
      `;
  });

  resultText += '</tbody></table>';
  mostrarMatriculasBloque.innerHTML = resultText;
  listarmatriculas.style.display = "block";
};

const formularioMatriculas= ()=>{
  FormularioMatriculas.innerHTML="";
  const div= document.createElement("div");
  div.classList.add("Formulariomatriculaa");
  div.innerHTML=`
  <form id="Formulariomatriculaa">
  <h4>Matricula</h4>

      <div class="form-row">
              <label for="InputIdMatricula">ID</label>
              <input type="number" class="form-control" id="InputIdAsignatura" placeholder="ID" required>

      <label for="InputestudianteMatricula">Estudiante</label>
      <select id="InputestudianteMatricula" class="form-control">
        <option selected>Estudiante...</option>
        <option>1</option>
      </select>
      
      <label for="InputAsignaturaMatricula">Asignatura</label>
      <select id="InputAsignaturaMatricula" class="form-control">
      <option selected>Asignatura...</option>
      <option>1</option>
      </select>

      <label for="PrecioMatricula">Precio</label>
      <input type="number" class="form-control" id="PrecioMatricula" placeholder="Precio" required>
 
      </div>
  <div id="botonsubir">
      <button id="submitBtn" class="btn btn-primary" onclick="submitMatricula();">Crear</button>
  </div>
</form>
`;
FormularioMatriculas.appendChild(div)
}

const ExisteMatricula = (id) => {
  return matriculas.some(matricula => matricula.id === id);
};

const submitMatricula =()=>{
  const idMatricula= document.getElementById("InputIdAsignatura").value;
  const estudiantematricula = document.getElementById("InputestudianteMatricula").value;
  const asignaturaMatricula= document.getElementById("InputAsignaturaMatricula").value;
  const periodomatri= 2
  const precioMatricula= parseFloat(document.getElementById("PrecioMatricula").value);

  if (ExisteMatricula(idMatricula)){
      alert(`Ya existe una matricula con el ID ${idMatricula}. Por favor, elige otro ID.`);
      return;
  }

  const newmatricula = new Matricula(
      idMatricula, 
      estudiantematricula, 
      asignaturaMatricula,
      periodomatri,
      precioMatricula
      );

  fetch("http://localhost:3000/matriculas",{
      method:"POST",
      headers:{
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newmatricula)
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("Matricula agregada correctamente:", data);
    // Actualiza la lista de estudiantes en el frontend
  })
  .catch((error) => {
    console.error("Error al agregar la Matricula:", error);
  });
}

const BuscarMatriculaById=(id)=>{
    const Matriculaencontrada= matriculas.find(matricula=> matricula.id === id)
  
    if (Matriculaencontrada){
      alert(`Matricula encontrada:\nID: ${Matriculaencontrada.id}\nNombre: ${Matriculaencontrada.estudiante_id}`);
    }else{
      alert(`Matricula con ID ${id} no encontrado.`);
    }
  }

const BuscarMatriculabyidform=()=>{
  MatriculasSearchId.innerHTML="";
  const div = document.createElement("div");
  div.classList.add("BuscarMatriculaByID");
  div.innerHTML=`
      <form id="FormularioMatricula">
              <h4>Buscar Matricula por ID</h4>
              <label for="inputidmatricula">ID</label>
              <input type="number" class="form-control" id="inputidmatricula" placeholder="ID">
              <div id="BuscarID">
              <button id="SubirID" class="btn btn-primary" onclick="BuscarMatriculaById(document.getElementById('inputidmatricula').value);">Buscar</button>
              </div>
      </form>
  `
  MatriculasSearchId.appendChild(div)
}


const Deletramatricula=(id) =>{
    const index= matriculas.findIndex(matricula=> matricula.id === id);
  
    if(index!= -1){
      matriculas.splice(index,1);
  
      fetch(`http://localhost:3000/matriculas/${id}`,{
            method:'DELETE',
    })
    .then(response=> response.json)
    .then(data=>{
      alert(`Matriculas con ID ${id} eliminado correctamente.`, data)
    })
    .catch(error=>{
      console.error(`Error al eliminar matriculas con ID ${id}:`, error)
    })
  }else{
    alert(`Matriculas con ID ${id} no encontrado`)
  }
  }
  
  const BorrarMatriculaPorIdform=()=>{
    MatriculaDeleteId.innerHTML="";
    const div = document.createElement("div");
    div.classList.add("Borrarmatr");
    div.innerHTML=`
    <form id="formularioBorrarMat">
                <h4>Borrar de matricula por ID</h4>
                <label for="BorrarIdmatr">ID</label>
                <input type="number" class="form-control" id="BorrarIdmatr" placeholder="ID">
                <div id="BuscarID">
                <button id="SubirID" class="btn btn-primary" onclick="Deletramatricula(document.getElementById('BorrarIdmatr').value);">Borrar</button>
                </div>
    </form>
  `
  MatriculaDeleteId.appendChild(div)
  }