async function showPrograms(){
    initialState();// every innerHTML become empty
    const programsHTML = document.getElementById("programs");
    programsHTML.innerHTML = "";// assure that is empty
    programsHTML.innerHTML += "<div class='h2 text-center'>Programs</div>"
    const programs = await load("programs");
    for(program of programs){
        if((program["id"]-1)%2 === 0){//the rows that we create only have 2 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            programsHTML.appendChild(div);
        }
        let lastRowHTML = programsHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        const card = createCard(program);
        lastRowHTML.innerHTML += card;
    }
}