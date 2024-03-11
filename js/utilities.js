// json functions
async function load(url) { //'profesores'
    try {
        let returnList = [];
        const response = await fetch(`http://localhost:3000/${url}`);
        if (!response.ok) {
            throw new Error(`Error to load ${url}. state: ${response.status}`);
        }
        returnList = await response.json();
        return returnList;
    } catch (error) {
        console.error(`Error to load the ${url}: ${error.message}`);
    }
}

async function save(newUser, url) {
    try {
        const response = await fetch(`http://localhost:3000/${url}`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newUser)
        });
        if (!response.ok) {
            throw new Error(`Error to load ${url}. state: ${response.status}`);
        }
        const createdUser = await response.json();
        console.log(`created ${url}:`, createdUser);
    } catch (error) {
        console.error(`Error to load the ${url}, ${error.message}`);
    }
}


//html functions
function createPersonForm(dataDic,name){
    let formHTMl = `
    <form class="align-items-center">
    `;

    for(let key in dataDic){
        if(key !=="id"){
            formHTMl += `
            <div class="form-group">
                <label for="${name}-${key}-input">${key.replaceAll("_"," ")}</label> 
                <textarea class="form-control" id="${name}-${key}-input" rows="1"></textarea>
            </div>`;
        }
    }
    formHTMl += `
    <button type="button" class="btn btn-primary mt-2" onClick="add${name}(e)">Add ${name}</button>
    </form>
    `;
    return formHTMl;
}

function createCard(dataDic){
    let cardHTML = `
    <div class="col">
        <div class="card">
            <div class="card-body">
    `;
    
    if (dataDic["id"] !== undefined) {
        cardHTML += `<h5 class="card-title">ID: ${dataDic["id"]}</h5>`;
    } else {
        cardHTML += `<h5 class="card-title">O.o</h5>`;
    }
    cardHTML += `<ul class="list-group">`;

    for (let key in dataDic) {
        if(key === "class_schedule") {
            cardHTML += `<li class="list-group-item"><span>${key.replaceAll("_", " ")}:</span><ul class="list-group">`;

            for (let schedule of dataDic[key]) {
                cardHTML += `<li class="mt-4">${createCard(schedule)}</li>`;
            }

            cardHTML += `</ul></li>`;
        } else {
            cardHTML += `<li class="list-group-item">${key.replaceAll("_", " ")}: ${dataDic[key]}</li>`;
        }
    }
    
    cardHTML += `</ul></div></div></div>`;
    return cardHTML;
}


function hiddeSecondaryMenus(){
    const teacherMenu = document.getElementById("teacher-menu");
    const studentMenu = document.getElementById("student-menu");
    teacherMenu.style.display = "none";
    studentMenu.style.display = "none";
}

function initialState(){
    hiddeSecondaryMenus();//make sure to hidde the secundary menus
    const container = document.getElementById("main-container");
    const divs = container.getElementsByTagName("div");
    for(let i = 0; i < divs.length; i++){
        divs[i].innerHTML = "";
    }
}