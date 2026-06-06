const MyForm = document.querySelector("form");

// Only run form logic on the page that has a form (index.html)
if (MyForm) {
    const InputName = document.querySelector("#modal-name");
    const InputEmail = document.querySelector("#modal-email");
    const InputPhone = document.querySelector("#modal-phone");
    const InputGender = document.querySelector("#modal-gender");

    MyForm.addEventListener("submit", (event) => {
        // Prevent default page reload
        event.preventDefault();

        // Save data to localStorage
        localStorage.setItem('name', InputName.value);
        localStorage.setItem('email', InputEmail.value);
        localStorage.setItem('phone', InputPhone.value);
        localStorage.setItem('gender', InputGender.value);

        // Redirect to success page
        window.location.href = "success.html";
    });
}

// Only run success-page logic on the page that has summary elements (success.html)
const NameInputted = document.querySelector(".summary-value-name");
if (NameInputted) {
    const EmailInputted = document.querySelector(".summary-value-email");
    const PhoneInputted = document.querySelector(".summary-value-phone");
    const GenderInputted = document.querySelector(".summary-value-gender");

    // Populate values from localStorage using textContent (safer than innerHTML)
    NameInputted.textContent = localStorage.getItem("name");
    EmailInputted.textContent = localStorage.getItem("email");
    PhoneInputted.textContent = localStorage.getItem("phone");
    GenderInputted.textContent = localStorage.getItem("gender");

    // Reveal the summary spans now that they have real values
    [NameInputted, EmailInputted, PhoneInputted, GenderInputted]
        .forEach(el => el.style.display = "");
}