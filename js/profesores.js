function teacherOptions(){
    hiddeSecondaryMenus();
    const teacherMenu = document.getElementById("teacher-menu");
    teacherMenu.style.display = 'block';
}

async function showTeachers(){
    initialState();// every innerHTML become empty
    const teachersHTML = document.getElementById("teachers");
    teachersHTML.innerHTML = "";// assure that is empty
    teachersHTML.innerHTML += "<div class='h2 text-center'>teachers</div>"
    const teachers = await load("teachers");
    for(teacher of teachers){
        if((teacher["id"]-1)%2 === 0){//the rows that we create only have 2 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            teachersHTML.appendChild(div);
        }
        let lastRowHTML = teachersHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        const card = createCard(teacher);
        lastRowHTML.innerHTML += card;
    }
}

async function newTeacherForm(){
    initialState();// every innerHTML become empty
    const teachersHTML = document.getElementById("teachers");
    teachersHTML.innerHTML = "";// assure that is empty
    teachersHTML.innerHTML += "<div class='h2 text-center'>New Teacher</div>"
    const teachers = await load("teachers");
    teachersHTML.innerHTML += createPersonForm(teachers[0],"Teacher");
}

async function addTeacher(){
    const teacherList = await load("teachers");

    const documentTypeInput = document.getElementById("Teacher-document_type-input");
    const documentNumberInput = document.getElementById("Teacher-document_number-input");
    const documentFirstNameInput = document.getElementById("Teacher-first_name-input");
    const documentLastNameInput = document.getElementById("Teacher-last_name-input");
    const documentdeparmentIdInput = document.getElementById("Teacher-deparment_id-input");

    const documentType = documentTypeInput.value;
    const documentNumber = documentNumberInput.value;
    const documentFirstName = documentFirstNameInput.value;
    const documentLastName = documentLastNameInput.value;
    const documentdeparmentId = documentdeparmentIdInput.value;

    const newTeacher = {
        "id": teacherList.length + 1,
        "document_type": documentType,
        "document_number": documentNumber,
        "first_name": documentFirstName,
        "last_name": documentLastName,
        "deparment_id": documentdeparmentId
    }

    await save(newTeacher,"teachers");

    documentTypeInput.value ="";
    documentNumberInput.value="";
    documentFirstNameInput.value="";
    documentLastNameInput.value="";
    documentdeparmentIdInput.value="";
    alert("Teacher sucessfully created");

}