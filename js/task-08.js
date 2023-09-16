const loginForm = document.querySelector(".login-form");

const getSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return alert("ERROR!!! Please fill in all fields!");
    };
    
    const loginValues = {
        email,
        password,
    };

    console.log(loginValues);

    form.reset();
};

loginForm.addEventListener("submit", getSubmit);
