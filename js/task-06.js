const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
    const valueValidationInput = validationInput.value.trim();
    const requiredLength = parseInt(validationInput.getAttribute("data-length"));

    if (valueValidationInput.length === requiredLength) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
    }
})
