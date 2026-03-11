const form = document.getElementById("registration");
const reply = document.getElementById("feedback");
const summary = document.getElementById("summary");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
});

form.addEventListener("reset", function (event) {
    reply.innerText = "";
    summary.innerHTML = "";
})

function replyMsg(message, color) {
    reply.innerText = message;
    reply.style.color = color;
}

function validateForm() {
    const fullName = document.getElementById("fullName").value.trim();
    const birthday = document.getElementById("birthday").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const religion = document.querySelector('#religion option:checked');
    const info = document.querySelectorAll('.info:checked');
    
    
    let hasError = false;

    if(info.length === 0) {
        replyMsg("Salah satu sumber informasi harus dipilih !", "red");
        hasError = true;
    }
    if(religion.value === "") {
        replyMsg("Religion must be selected !", "red");
        hasError = true;
    }
    if(!gender) {
        replyMsg("Gender must be selected !", "red");
        hasError = true;
    }
    if(birthday === "") {
    replyMsg("Date of Birth must be inputted !", "red");
        hasError = true;
    }
    if(fullName === "") {
        replyMsg("Full Name cannot be empty !", "red");
        hasError = true;
    }

    const infos = Array.from(info).map(i => i.value).join("<br>-");

    if (hasError) {
        summary.innerHTML = "";
        return;
    } else {
        replyMsg("Success ! Form Submitted !!", "green");
        summary.innerHTML = `<h3> === REGISTRATION DATA === </h3> 
        <p>Full Name: ${fullName}</p>
        <p>Date of Birth: ${birthday}</p>
        <p>Gender: ${gender.value}</p>
        <p>Religion: ${religion.value}</p>
        <p>Information source: <br> -${infos}</p>`;
    }
}