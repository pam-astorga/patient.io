let username = document.getElementById("username");
let password = document.getElementById("password");
let login = document.getElementById("login");
let patientForm = [];

let container = document.getElementById("container2");

container.style.visibility = "hidden";

let submit = document.getElementById("submit");

login.addEventListener("click", (event) => {
    event.preventDefault();
    if (username.value === 'Administrator' && password.value === 'admin123') {
        console.log("Login successful");
        container.style.visibility = 'visible';
        document.getElementById("user").innerText = username.value;
    } else {
        document.getElementById("error").textContent = "Wrong credentials. Try again.";
    }
})

submit.addEventListener("click", (event) => {
    event.preventDefault();
    checkFirstName();
    checkLastName();
    checkAddress();
    checkBirthDate();
    checkContact();
    checkGender();

    let progOption = document.getElementById("symptom");
    let mapProg2 = [...progOption.selectedOptions].map(option => option.value)
    document.getElementById("error").textContent += "You have to choose one symptom.";

    let details = {
        firstName: document.getElementById("firstname").value,
        middleName: document.getElementById("middlename").value,
        lastName: document.getElementById("lastname").value,
        address: document.getElementById("address").value,
        birthdate: document.getElementById("birthdate").value,
        contactNumber: document.getElementById("contact").value,
        gender: document.getElementById("gender").value,
        medicalHistory: document.getElementById("medHistory").value,
        symptoms: document.getElementById("symptom").value
        //medication: 
    }
    patientForm.push(details);
    //document.querySelector('#reviewForm').reset();
    console.table(patientForm);

    let display = document.querySelector("#display pre");
    //display.textContent = "\n" + JSON.stringify(patientForm);
    //storing data in localStorage
    localStorage.setItem("Patient Form", JSON.stringify(patientForm));
})

function checkFirstName() {
    let firstName = document.querySelector("#firstname");
    if (firstName.value == "") {
        document.getElementById("error").textContent += "First name is missing.";
    }
}

function checkLastName() {
    let lastName = document.getElementById("lastname");
    if (lastName.value == "") {
        document.getElementById("error").textContent += "Last name is missing. ";
    }
}

function checkAddress() {
    let address = document.getElementById("address");
    if (address.value == "") {
        document.getElementById("error").textContent += "Address is missing. ";
    }
}

function checkBirthDate() {
    let bday = document.getElementById("birthdate");
    if (bday.value == "") {
        document.getElementById("error").textContent += "Birthdate is missing. ";
    }
}

function checkContact() {
    let contact = document.getElementById("contact");
    if (contact.value == "") {
        document.getElementById("error").textContent += "Contact number is missing. ";
    }
}

function checkGender() {
    let gender = document.getElementById("gender");
    if (gender.checked == "") {
        document.getElementById("error").textContent += "Gender is missing.";
    }
}

let yesButton = document.getElementById("medYes");
yesButton.addEventListener('click', () => {
    if(yesButton.checked == true) {
        document.getElementById("ifYes").disabled = false;
    } else {
        document.getElementById("ifYes").disabled = true;
    }
})

let noButton = document.getElementById("medNo");
noButton.addEventListener('click', () => {
    if(noButton.checked == true) {
        document.getElementById("ifYes").disabled = true;
    } else {
        document.getElementById("ifYes").disabled = false;
    }
})

let reset = document.querySelector("#reset");

reset.addEventListener('click', () => {
    document.querySelector("#system").reset();
})