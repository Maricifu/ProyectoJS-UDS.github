async function showPeriods(){
    initialState();// every innerHTML become empty
    const periodsHTML = document.getElementById("periods");
    periodsHTML.innerHTML = "";// assure that is empty
    periodsHTML.innerHTML += "<div class='h2 text-center'>Academic Periods</div>"
    const periods = await load("periods");
    for(period of periods){
        if((period["id"]-1)%1 === 0){//the rows that we create only have 1 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            periodsHTML.appendChild(div);
        }
        let lastRowHTML = periodsHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        const card = createCard(period);
        lastRowHTML.innerHTML += card;
    }
}