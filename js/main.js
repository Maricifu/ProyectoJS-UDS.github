let students = []; 
let programas= [];
let teachers= [];
let datosDepartamentos = [];
let salones= [];
let asignaturazz= [];
let cursos= [];
let tarifas=[];
let periodos= [];
let matriculas= [];
const totalMatriculasPorPeriodo = calcularTotalMatriculasPorPeriodo(matriculas, periodos, tarifas);


fetch("http://localhost:3000/tarifas")
    .then(response=>response.json())
    .then(datazoss=>{
        tarifas= datazoss
    }).catch(error=>{
        console.error('Error al obtener los datos de las asignaturas: ', error)
    })

fetch("http://localhost:3000/periodos")
    .then(response=>response.json())
    .then(datazoss=>{
        periodos= datazoss
    }).catch(error=>{
        console.error('Error al obtener los datos de las asignaturas: ', error)
    })

fetch("http://localhost:3000/matriculas")
    .then(response=>response.json())
    .then(datazoss=>{
        matriculas= datazoss
    }).catch(error=>{
        console.error('Error al obtener los datos de las asignaturas: ', error)
    })

fetch("http://localhost:3000/asignaturas")
    .then(response=>response.json())
    .then(datazoss=>{
        asignaturazz= datazoss
    }).catch(error=>{
        console.error('Error al obtener los datos de las asignaturas: ', error)
    })

fetch("http://localhost:3000/x  os")
    .then(response=>response.json())
    .then(datazos=>{
        cursos= datazos
    }).catch(error=>{
        console.error('Error al obtener los datos de los cursos: ', error)
})

fetch("http://localhost:3000/salones")
    .then(response=>response.json())
    .then(datazzz=>{
        salones= datazzz;
    }).catch(error=>{
        console.error('Error al obtener datos de las asignaturas: ', error)
    })

fetch("http://localhost:3000/departamentos")
    .then(response => response.json())
    .then(dataas => {
        datosDepartamentos = dataas;
        llenarFormulario(datosDepartamentos);
    })
    .catch(error => {
        console.error('Error al obtener datos de los departamentos:', error);
    });

fetch("http://localhost:3000/programas")
    .then(response => response.json())
    .then(datass => {
    programas=datass;
    })
    .catch(error => {
    console.error('Error al obtener datos de programas:', error);
      throw error; // Propaga el error para manejarlo en el código que llame a esta función
});

//personas

fetch("http://localhost:3000/profesores")
    .then(response => response.json())
    .then(data => {
        teachers = data;
    })
    .catch(error => {
        console.error('Error al obtener datos de los profesores:', error);
});

fetch("http://localhost:3000/alumnos")
    .then(response => response.json())
    .then(data => {
        students = data;
    })
    .catch(error => {
        console.error('Error al obtener datos de estudiantes:', error);
});
