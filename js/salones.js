async function showClassrooms(){
    initialState();// every innerHTML become empty
    const classroomsHTML = document.getElementById("classrooms");
    classroomsHTML.innerHTML = "";// assure that is empty
    classroomsHTML.innerHTML += "<div class='h2 text-center'>classrooms</div>"
    const classrooms = await load("classrooms");
    for(classroom of classrooms){
        if((classroom["id"]-1)%2 === 0){//the rows that we create only have 1 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            classroomsHTML.appendChild(div);
        }
        let lastRowHTML = classroomsHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        const card = createCard(classroom);
        lastRowHTML.innerHTML += card;
    }
}