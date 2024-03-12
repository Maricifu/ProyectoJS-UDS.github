const formularioprofe = document.querySelector("#formularioProfesores");
const mostrarprofes = document.querySelector("#mostrarProfesores");
const profesearchid= document.querySelector("#buscarProfesor")
const profedelete= document.querySelector("#borrarProfesor")

    class Profesor {
      constructor(id, tipo_documento, numero_documento, nombre, apellido, departamento_id) {
          this.id = id;
          this.tipo_documento = tipo_documento;
          this.numero_documento = numero_documento;
          this.nombre = nombre;
          this.apellido= apellido
          this.departamento_id = departamento_id;
      }
  }

  const showteachers = () => {
    const mostrarProfesBloque = document.getElementById("mostrarProfesores");
    mostrarProfesBloque.innerHTML = "";

    let resultText = "<h2>Lista de Profesores:</h2>";
    resultText += '<table class="table table-bordered">';
    resultText += '<thead><tr><th>ID</th><th>Nombre</th><th>Tipo Documento</th><th>Número Doc</th><th>Departamento ID</th></tr></thead><tbody>';

    teachers.forEach(profe => {
        resultText += `
            <tr>
                <td>${profe.id}</td>
                <td>${profe.nombre} ${profe.apellido}</td>
                <td>${profe.tipo_documento}</td>
                <td>${profe.numero_documento}</td>
                <td>${profe.departamento_id}</td>
            </tr>
        `;
    });

    resultText += '</tbody></table>';
    mostrarProfesBloque.innerHTML = resultText;
    profesenlistarbloque.style.display = "block";
};

const formularioprofes=()=>{
    formularioprofe.innerHTML="";
    const div= document.createElement("div");
    div.classList.add("formularioCrearProfesor")

    div.innerHTML=`
    <form id="FormularioProfesorr">
    <h4>Profesor</h4>

            <label for="InputIdProfe">ID</label>
            <input type="number" class="form-control" id="InputIdProfe" placeholder="ID">

            <label for="InputNombreProfe">Nombre</label>
            <input type="text" class="form-control" id="InputNombreProfe" placeholder="Nombre">

            <label for="InputapellidoProfe">Apellido</label>
            <input type="text" class="form-control" id="InputapellidoProfe" placeholder="Apellido">

            <label for="inputdocumentoprofe">Tipo de documento</label>
            <select id="inputdocumentoprofe" class="form-control">
                <option selected>Tipo de documento</option>
                <option>T.I</option>
                <option>C.C</option>
                <option>C.E</option>
            </select>
        

            <label for="inputDocumentProfesor">Numero de documento</label>
            <input type="number" class="form-control" id="inputDocumentProfesor" placeholder="Documento numero">


            <label for="InputidDepartamento">Programas ID</label>
            <select id="InputidDepartamento" class="form-control">
                <option selected>Departamentos</option>
            </select>


            
    <div id="botonsubir">
        <button id="submitBtn" class="btn btn-primary" onclick="CrearProfesor();">Crear</button>
    </div>
</form>
    `
    formularioprofe.append(div)
}

const existeProfeID= (id) =>{
    return teachers.some(profe => profe.id === id);
}

const CrearProfesor =()=>{
  const id_profe = document.getElementById("InputIdProfe").value;
  const nombre_profe = document.getElementById("InputNombreProfe").value;
  const apellido_profe= document.getElementById("InputapellidoProfe").value
  const tipo_documento_profe = document.getElementById("inputdocumentoprofe").value;
  const numero_documento_profe = document.getElementById("inputdocumentoprofe").value;
  const departamento_id_profe = document.getElementById("InputidDepartamento").value;

  if (
    id_profe === "" ||
    nombre_profe === "" ||
    apellido_profe===""||
    tipo_documento_profe === "Tipo de documento" ||
    numero_documento_profe === "" ||
    departamento_id_profe === "Departamentos" 
  ) {
    alert("Por favor, completa todos los campos del formulario.");
    return;
  }

  if (existeProfeID(id_profe)) {
    alert(`Ya existe un profesor con el ID ${id_profe}. Por favor, elige otro ID.`);
    return;
  }

  const newProfe = new Profesor(
    id_profe,
    tipo_documento_profe,
    numero_documento_profe,
    nombre_profe,
    apellido_profe, 
    departamento_id_profe
  )

  teachers.push(newProfe)
  fetch("http://localhost:3000/profesores",{
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newProfe),
  })
    .then((response)=> response.json())
    .then((data)=>{
        console.log("Profesor agregado correctamente:", data);
    })
    .catch((error)=>{
        console.error("Error al agregar profesor:", error)
    });
};

const BuscarprofesorPorid =(id)=>{
    const profesencontrado= teachers.find(profesor=> profesor.id === id);

    if(profesencontrado){
        alert(`Profesor encontrado:\nID: ${profesencontrado.id}\nNombre: ${profesencontrado.nombre}`);
  } else {
      alert(`Profesor con ID ${id} no encontrado.`);
    }
}

const buscarProfeporIdform=()=>{
    profesearchid.innerHTML="";
    const div = document.createElement("div");
    div.classList.add("BuscarProfeidm");
    div.innerHTML=`
        <form id="formularioProfee">
                    <h4>Buscar profe por ID</h4>
                    <label for="InputProfesoridM">ID</label>
                    <input type="number" class="form-control" id="InputProfesoridM" placeholder="ID">
                    <div id="BuscarID">
                    <button id="SubirID" class="btn btn-primary" onclick="BuscarprofesorPorid(document.getElementById('InputProfesoridM').value);">Buscar</button>
                    </div>
        </form>
    `
    profesearchid.appendChild(div);
};

const DeleteProfeById =(id)=>{
    const index = teachers.findIndex(profe=> profe.id=== id);

    if(index != -1){
        teachers.splice(index,1);


        fetch(`http://localhost:3000/profesores/${id}`,{
            method:'DELETE',
        })
        .then(response=> response.json())
        .then(data=>{
            alert(`Profesor con ID ${id} eliminado correctamente.`, data)
        })
        .catch(error=>{
            console.error(`Error al eliminar profesor con ID ${id}:`, error)
        })
    }else{
        alert(`Profesor con ID ${id} no encontrado`)
    }
}

const BorrarProfesorForm =()=>{
    profedelete.innerHTML= "";
    const div = document.createElement("div");
    div.classList.add("BorrarProfesorm");
    div.innerHTML= `
        <form id="formularioprofe">
                    <h4>Borrar profe por ID</h4>
                    <label for="BorrarIDProfe">ID</label>
                    <input type="number" class="form-control" id="BorrarIDProfe" placeholder="ID">
                    <div id="BuscarID">
                    <button id="SubirID" class="btn btn-primary" onclick="DeleteProfeById(document.getElementById('BorrarIDProfe').value);">Borrar</button>
                    </div>
        </form>
    `
    profedelete.appendChild(div)
}

function llenarFormularioprofe(departamentos) {
    const inputIdDepartamentos = document.getElementById("InputidDepartamento");
    inputIdDepartamentos.innerHTML = "<option selected>Departamentos</option>";
  
    departamentos.forEach(departamento => {
      const option = document.createElement("option");
      option.value = departamento.id;
      option.text = departamento.nombre;
      inputIdDepartamentos.appendChild(option);
    });
}