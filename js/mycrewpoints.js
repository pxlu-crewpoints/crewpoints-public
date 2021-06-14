var section1 = document.getElementsByClassName("section1");

for (let i = 0; i < section1.length; i++) {
    section1[i].addEventListener("click", () => {
        document.getElementById("section1radio").checked = true;
    })
}

var section2 = document.getElementsByClassName("section2");

for (let i = 0; i < section1.length; i++) {
    section2[i].addEventListener("click", () => {
        document.getElementById("section2radio").checked = true;
    })
}

var section3 = document.getElementsByClassName("section3");

for (let i = 0; i < section1.length; i++) {
    section3[i].addEventListener("click", () => {
        document.getElementById("section3radio").checked = true;
    })
}

var section4 = document.getElementsByClassName("section4");

for (let i = 0; i < section1.length; i++) {
    section4[i].addEventListener("click", () => {
        document.getElementById("section4radio").checked = true;
    })
}