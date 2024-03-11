function studentOptions(){
    hiddeSecondaryMenus();
    const studentMenu = document.getElementById("student-menu");
    studentMenu.style.display = 'block';
}

async function showStudents(){
    initialState();// every innerHTML become empty
    const studentsHTML = document.getElementById("students");
    studentsHTML.innerHTML = "";// assure that is empty
    studentsHTML.innerHTML += "<div class='h2 text-center'>students</div>"
    const students = await load("students");
    for(student of students){
        if((student["id"]-1)%2 === 0){//the rows that we create only have 2 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            studentsHTML.appendChild(div);
        }
        let lastRowHTML = studentsHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        const card = createCard(student);
        lastRowHTML.innerHTML += card;
    }
}

async function newStudentForm(){
    initialState();// every innerHTML become empty
    const studentsHTML = document.getElementById("students");
    studentsHTML.innerHTML = "";// assure that is empty
    studentsHTML.innerHTML += "<div class='h2 text-center'>New student</div>"
    const students = await load("students");
    studentsHTML.innerHTML += createPersonForm(students[0],"Student");
    
}

async function addStudent(){
    const studentList = await load("students");

    const documentTypeInput = document.getElementById("Student-document_type-input");
    const documentNumberInput = document.getElementById("Student-document_number-input");
    const documentFirstNameInput = document.getElementById("Student-first_name-input");
    const documentLastNameInput = document.getElementById("Student-last_name-input");
    const documentResidentCityInput = document.getElementById("Student-residence_city-input");
    const documentDirectionInput = document.getElementById("Student-direction-input");
    const documentPhoneInput = document.getElementById("Student-phone-input");
    const documentBirthdateInput = document.getElementById("Student-birthdate-input");
    const documentGenderInput = document.getElementById("Student-gender-input");
    const documentProgramIdInput = document.getElementById("Student-program_id-input");

    const documentType = documentTypeInput.value;
    const documentNumber = documentNumberInput.value;
    const documentFirstName = documentFirstNameInput.value;
    const documentLastName = documentLastNameInput.value;
    const documentResidentCity = documentResidentCityInput.value;
    const documentDirection = documentDirectionInput.value;
    const documentPhone = documentPhoneInput.value;
    const documentBirthdate = documentBirthdateInput.value;
    const documentGender = documentGenderInput.value;
    const documentProgramId = documentProgramIdInput.value;

    const newStudent = {
        "id": studentList.length + 1,
        "first_name": documentFirstName,
        "last_name": documentLastName,
        "document_type": documentType,
        "document_number": documentNumber,
        "resident_city": documentResidentCity,
        "direction": documentDirection,
        "phone": documentPhone,
        "birthdate": documentBirthdate,
        "gender": documentGender,
        "program_id": documentProgramId
    }

    await save(newStudent,"students");

    documentTypeInput.value ="";
    documentNumberInput.value="";
    documentFirstNameInput.value="";
    documentLastNameInput.value="";
    documentResidentCityInput.value="";
    documentDirectionInput.value="";
    documentPhoneInput.value="";
    documentBirthdateInput.value="";
    documentGenderInput.value="";
    documentProgramIdInput.value="";

    alert("Student sucessfully created");

}