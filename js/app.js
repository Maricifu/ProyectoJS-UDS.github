
// Obtén todos los elementos de la lista de navegación
var navItems = document.querySelectorAll('#myTabs .nav-link');
      
// Agrega un evento de clic a cada elemento
navItems.forEach(function (item) {
  item.addEventListener('click', function () {
    // Elimina la clase "active" de todos los elementos
    navItems.forEach(function (navItem) {
      navItem.classList.remove('active');
    });

    // Agrega la clase "active" al elemento clicado
    item.classList.add('active');
  });
});
const ocultartodoz =()=>{
    profesenlistarbloque.style.display="none"
    estudianteslistabloque.style.display= "none"
    ListarAsignaturas.style.display="none"
    listarmatriculas.style.display="none"
}

const ocultaartodo=()=>{
  listadoperiodoss.style.display="none"
  listadoprogramass.style.display="none"
  listadocursoss.style.display="none"
  ListarAsignaturas.style.display="none"
  listadotarifass.style.display="none"
  listadosaloness.style.display="none"
  listadodepartamentos.style.display="none"
}

const formulariobloque= document.getElementById("formularioestudiante")
const estudianteslistabloque= document.getElementById("mostrarestudiantes")
const buscarestudianteID= document.getElementById("Buscarestudianteporid")
const borrarEstudiante= document.getElementById("BorrarEstudiantePorID")

const formularioprofebloque =document.getElementById("formularioProfesores") 
const profesenlistarbloque = document.getElementById("mostrarProfesores")
const buscarprofebyid= document.getElementById("BuscarProfesorporID")
const borrarProfesorbyid= document.getElementById("BorrarProfesorPorID")

const ListarAsignaturas= document.getElementById("mostrarasignaturas")
const formularioasig= document.getElementById("formularioasignaturas")
const buscarasig= document.getElementById("buscarmatriculasporid");
const borrarasig=document.getElementById("BorrarMatriculasPorId");

const listarmatriculas= document.getElementById("MostrarMatriculas");
const formulariomatri= document.getElementById("FormularioMatriculas");
const buscarmatri= document.getElementById("BuscarMatriculas");
const borrarmatri = document.getElementById("BorrarMatriculaPorId");

const listadoperiodoss= document.getElementById("mostrarperiodos")    
const listadoprogramass= document.getElementById("mostrarprogramas")    
const listadocursoss= document.getElementById("mostrarcursos")    
const listadotarifass= document.getElementById("mostrartarifas")    
const listadosaloness= document.getElementById("mostrarsalones")    
const listadodepartamentos= document.getElementById("mostrardepartamentos")    
const botonmostrarcosas= document.getElementById("botonesmostrar")
const botonmostrarrestoo=document.getElementById("botonesmostrarResto")
const tablaresultadoss= document.getElementById("tablaResultados")
const horario = document.getElementById("reportehorario")
const asignamasmatri= document.getElementById("resultadoAsignaturasMasMatriculadas")

const ocultartodo=()=>{
  estudianteslistabloque.style.display= "none"
  formulariobloque.style.display="none"
  buscarestudianteID.style.display="none"
  borrarEstudiante.style.display="none"
  formularioprofebloque.style.display="none"
  profesenlistarbloque.style.display="none"
  buscarprofebyid.style.display="none"
  borrarProfesorbyid.style.display="none"
  ListarAsignaturas.style.display="none"
  formularioasig.style.display="none"
  buscarasig.style.display="none"
  borrarasig.style.display="none"
  listarmatriculas.style.display="none"
  formulariomatri.style.display="none"
  buscarmatri.style.display="none"
  borrarmatri.style.display="none"
  listadoperiodoss.style.display="none"
  listadoprogramass.style.display="none"
  listadocursoss.style.display="none"
  listadotarifass.style.display="none"
  listadosaloness.style.display="none"
  listadodepartamentos.style.display="none"
  botonmostrarcosas.style.display="none"
  botonmostrarrestoo.style.display="none"
  tablaresultadoss.style.display="none"
  horario.style.display="none"
  asignamasmatri.style.display="none"
}

document.getElementById('mostrarestudiantes').addEventListener('click', function() {
    ocultartodo();
    botonmostrarcosas.style.display="block"

  });
  
  document.getElementById('CrearEstudiante').addEventListener('click', function() {
    ocultartodo();
    formulario();
    buscarEstudianteIDform();
    BorrarEstudianteConID()
    llenarFormulario(programas)
    borrarEstudiante.style.display="block"
    formulariobloque.style.display="block"
    buscarestudianteID.style.display="block"
  });
  
  document.getElementById('Profesoresbutton').addEventListener('click', function(){
    ocultartodo();
    BorrarProfesorForm();
    buscarProfeporIdform();
    formularioprofes();
    llenarFormularioprofe(datosDepartamentos);
    formularioprofebloque.style.display="block"
    buscarprofebyid.style.display="block"
    borrarProfesorbyid.style.display="block"
  })

  document.getElementById('Asignaturasbutton').addEventListener('click', function() {
    ocultartodo();
    formularioAsignaturas();
    llenarFormularioCursos(cursos);
    llenarFormularioProfesoresformulario(teachers);
    llenarFormularioProgramasasignaturas(programas);
    llenarFormularioSalonesasignaturas(salones)
    buscarasignaturaporidform();
    BorrarAsignaturaform();

    formularioasig.style.display="flex";
    buscarasig.style.display="block";
    borrarasig.style.display="block";
  });

  document.getElementById('matriculasbutton').addEventListener('click', function(){
    ocultartodo();
    formularioMatriculas();
    BuscarMatriculabyidform();
    BorrarMatriculaPorIdform();
    llenarEstudiantesMatriculas(students);
    LlenarasignaturasMatriculas(asignaturazz);
    formulariomatri.style.display="block";
    buscarmatri.style.display="block";
    borrarmatri.style.display="block";
  })

  document.getElementById('mostrartodobutton').addEventListener('click', function(){
    ocultartodo();
    
    botonmostrarrestoo.style.display="block"
  })
  
  document.getElementById('horarioestudiante').addEventListener('click', function(){
    ocultartodo();
    horario.style.display="block"

    Genrarhorarioforzm()
  })

  document.getElementById("totalmatri").addEventListener('click', function(){
    ocultartodo();
    mostrarResultadosEnTexto(matriculas, periodos);
    tablaresultadoss.style.display="block"
  })

  document.getElementById("AsigMasMatriculada").addEventListener('click', function(){
    ocultartodo()
    asignamasmatri.style.display="block"
    mostrarAsignaturasMasMatriculadasEnHTML(matriculas, asignaturazz);
    asignamasmatri.style.display="block"

  })