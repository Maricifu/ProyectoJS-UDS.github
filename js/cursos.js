async function showCourses(){
    initialState();// every innerHTML become empty
    const coursesHTML = document.getElementById("courses");
    coursesHTML.innerHTML = "";// assure that is empty
    coursesHTML.innerHTML += "<div class='h2 text-center'>Courses</div>"
    const courses = await load("courses");
    for(course of courses){
        if((course["id"]-1)%2 === 0){//the rows that we create only have 1 spaces
            const div = document.createElement("div");
            div.classList.add("row");
            div.classList.add("mb-4");
            coursesHTML.appendChild(div);
        }
        let lastRowHTML = coursesHTML.querySelectorAll(".row");
        lastRowHTML = lastRowHTML[lastRowHTML.length-1];
        const card = createCard(course);
        lastRowHTML.innerHTML += card;
    }
}