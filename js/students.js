const formularioEstudiantes = document.querySelector("#formularioestudiante");
const mostrarestudiantes = document.querySelector("#mostrarestudiantes");
const estudiantesearchid= document.querySelector("#Buscarestudianteporid")
const estudiantedelete= document.querySelector("#BorrarEstudiantePorID")

function llenarFormulario(programas) {
  const inputIdPrograma = document.getElementById("Inputidprograma");
  inputIdPrograma.innerHTML = "<option selected>Programas</option>";

  programas.forEach(programa => {
    const option = document.createElement("option");
    option.value = programa.id;
    option.text = programa.nombre;
    inputIdPrograma.appendChild(option);
  });
}



    class Estudiante {
      constructor(id, tipo_documento, numero_documento, nombre, apellido, ciudad_residencia, direccion, telefono, fecha_nacimiento, sexo, programa_id) {
          this.id = id;
          this.tipo_documento = tipo_documento;
          this.numero_documento = numero_documento;
          this.nombre = nombre;
          this.apellido= apellido
          this.ciudad_residencia = ciudad_residencia;
          this.direccion = direccion;
          this.telefono = telefono;
          this.fecha_nacimiento = fecha_nacimiento;
          this.sexo = sexo;
          this.programa_id = programa_id;
      }
  }


const showstudents = () => {
    const mostrarestudiantes = document.getElementById("mostrarestudiantes");
    mostrarestudiantes.innerHTML = ""; // Limpia el contenido anterior

    let resultText = "<h2>Lista de Estudiantes:</h2>";
    resultText += '<img src="/resources/coding.svg" alt="Coding Image" style="width: 200px; height: auto; margin-bottom: 20px;">';
    resultText += '<table class="table table-bordered">';
    resultText += '<thead><tr><th>id</th><th>nombre</th><th>Tipo Documento</th><th>Numero Doc</th><th>ciudad</th><th>Direccion</th><th>telefono</th><th>cumpleanños</th><th>Genero</th><th>programa</th></tr></thead><tbody>';
    students.forEach(estudiante => {
        resultText += `
            
        <tr><td>${estudiante.id}</td><td> ${estudiante.nombre} ${estudiante.apellido}</td> <td>${estudiante.tipo_documento}</td> <td>${estudiante.numero_documento}</td> <td>${estudiante.ciudad_residencia}</td> <td>${estudiante.direccion}</td> <td>${estudiante.telefono}</td> <td>${estudiante.fecha_nacimiento}</td> <td>${estudiante.sexo}</td> <td>${estudiante.programa_id}</td></tr> 
            
        `;
    });
    resultText+='</tbody></table>'
    mostrarestudiantes.innerHTML=resultText
    estudianteslistabloque.style.display= "block"

};


const formulario=()=>{
    formularioEstudiantes.innerHTML="";
    const div= document.createElement("div");
    div.classList.add("formularioD")

    
    div.innerHTML=`
    <form id="formularioestudiante">
    <h4>Crear estudiante</h4>

      <label for="inputID">ID</label>
      <input type="number" class="form-control" id="inputID" placeholder="ID">
    
      <label for="inputName4">Nombre</label>
      <input type="text" class="form-control" id="inputName4" placeholder="Nombre">
      
    
      <label for="Inputapellido">Apellido</label>
        <input type="text" class="form-control" id="Inputapellido" placeholder="Apellido">

        <label for="inputdocumento">Tipo de documento</label>
        <select id="inputdocumento" class="form-control">
          <option selected>Tipo de documento</option>
          <option>T.I</option>
          <option>C.C</option>
          <option>C.E</option>
        </select>
     

      <label for="inputDocument">Numero de documento</label>
      <input type="number" class="form-control" id="inputDocument" placeholder="Documento numero">

        <label for="InputCiudad">Ciudad</label>
        <input type="text" class="form-control" id="InputCiudad" placeholder="Ciudad">
      
      <label for="inputdir">Dirección</label>
        <input type="text" class="form-control" id="inputdir" placeholder="Direccion">
      

        <label for="inputTel">Telefono</label>
        <input type="number" class="form-control" id="inputTel" placeholder="Telefono">
      

        <label for="inputnacimiento">Fecha de nacimiento</label>
        <input type="date" class="form-control" id="inputnacimiento" placeholder="Fecha de nacimiento">

        <label for="Inputgenero">Genero</label>
        <select id="Inputgenero" class="form-control">
          <option selected>Genero</option>
          <option>Hombre</option>
          <option>Mujer</option>
          <option>Otro</option>
        </select>


        <label for="Inputidprograma">Programas ID</label>
        <select id="Inputidprograma" class="form-control">
          <option selected>Programas</option>
          
          <option>1</option>
          
        </select>
      
    </div>
    
    <div id="botonsubir">
    <button id="submitBtn" class="btn btn-primary" onclick="submitForm();">Crear</button>
    </div>

    </form>
    `
    formularioEstudiantes.append(div);
}


const existeEstudianteConID = (id) => {
  return students.some(estudiante => estudiante.id === id);
};

const submitForm = () => {
  // Obtén los valores del formulario
  const id = document.getElementById("inputID").value;
  const nombre = document.getElementById("inputName4").value;
  const apellido= document.getElementById("Inputapellido").value
  const tipo_documento = document.getElementById("inputdocumento").value;
  const numero_documento = document.getElementById("inputDocument").value;
  const ciudad_residencia = document.getElementById("InputCiudad").value;
  const direccion = document.getElementById("inputdir").value;
  const telefono = document.getElementById("inputTel").value;
  const fecha_nacimiento = document.getElementById("inputnacimiento").value;
  const sexo = document.getElementById("Inputgenero").value;
  const programa_id = document.getElementById("Inputidprograma").value;

  // Verifica si algún campo está vacío
  if (
    id === "" ||
    nombre === "" ||
    apellido===""||
    tipo_documento === "Tipo de documento" ||
    numero_documento === "" ||
    ciudad_residencia === "" ||
    direccion === "" ||
    telefono === "" ||
    fecha_nacimiento === "" ||
    sexo === "Genero" ||
    programa_id === ""
  ) {
    alert("Por favor, completa todos los campos del formulario.");
    return;
  }

  // Verifica si el estudiante ya existe con el mismo ID
  if (existeEstudianteConID(id)) {
    alert(`Ya existe un estudiante con el ID ${id}. Por favor, elige otro ID.`);
    return;
  }

  const newStudent = new Estudiante(
    id,
    tipo_documento,
    numero_documento,
    nombre,
    apellido,
    ciudad_residencia,
    direccion,
    telefono,
    fecha_nacimiento,
    sexo,
    programa_id
  );

  // Agrega el nuevo estudiante a la lista local (puedes omitir este paso si solo quieres enviarlo al servidor)
  students.push(newStudent);

  // Envia el nuevo estudiante al servidor
  fetch("http://localhost:3000/alumnos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newStudent),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Estudiante agregado correctamente:", data);
      // Actualiza la lista de estudiantes en el frontend
      showstudents();
    })
    .catch((error) => {
      console.error("Error al agregar estudiante:", error);
    });
};

// Función para buscar un estudiante por su ID
const buscarEstudiantePorId = (id) => {
  const estudianteEncontrado = students.find(estudiante => estudiante.id === id);

  if (estudianteEncontrado) {
      alert(`Estudiante encontrado:\nID: ${estudianteEncontrado.id}\nNombre: ${estudianteEncontrado.nombre}`);
  } else {
      alert(`Estudiante con ID ${id} no encontrado.`);
  }
};

const buscarEstudianteIDform = () => {
  estudiantesearchid.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("Buscarestudiantem");
  div.innerHTML = `
      <form id="formularioestudiante">
                  <h4>Buscar estudiante por ID</h4>
                  <label for="inputIDalumno">ID</label>
                  <input type="number" class="form-control" id="inputIDalumno" placeholder="ID">
                  <div id="BuscarID">
                    <button id="SubirID" class="btn btn-primary" onclick="buscarEstudiantePorId(document.getElementById('inputIDalumno').value);">Buscar</button>
                  </div>
      </form>
  `;
  estudiantesearchid.appendChild(div);
};

const borrarEstudiantePorId= (id)=>{
  const index = students.findIndex(estudiante=> estudiante.id === id);

  if (index != -1){
    students.splice(index,1);


    fetch(`http://localhost:3000/alumnos/${id}`, {
      method:'DELETE',
    })
    .then(response=> response.json())
    .then(data =>{
      alert(`Estudiante con ID ${id} eliminado correctamente.`, data);
    })
    .catch(error=>{
      console.error(`Error al eliminar estudiante con ID ${id}:`, error)
    })
  }else {
    alert(`Estudiante con ID ${id} no encontrado`)
  }
}

const BorrarEstudianteConID = () => {
  estudiantedelete.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("Borrarestudiantem");
  div.innerHTML = `
      <form id="formularioestudiante">
                  <h4>Borrar estudiante por ID</h4>
                  <label for="BorrarID">ID</label>
                  <input type="number" class="form-control" id="BorrarID" placeholder="ID">
                  <div id="BuscarID">
                    <button id="SubirID" class="btn btn-primary" onclick="borrarEstudiantePorId(document.getElementById('BorrarID').value);">Borrar</button>
                  </div>
      </form>
  `;
  estudiantedelete.appendChild(div);
};