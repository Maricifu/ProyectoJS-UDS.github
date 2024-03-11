async function showDepartments(){
    initialState();// every innerHTML become empty
    const departmentsHTML = document.getElementById("departments");
    departmentsHTML.innerHTML = "";// assure that is empty
    departmentsHTML.innerHTML += "<div class='h2 text-center'>Departments</div>"
    const departments = await load("departments");
    for(department of departments){
        if((department["id"]-1)%2 === 0){//the rows that we create only have 1 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            departmentsHTML.appendChild(div);
        }
        let lastRowHTML = departmentsHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        const card = createCard(department);
        lastRowHTML.innerHTML += card;
    }
}