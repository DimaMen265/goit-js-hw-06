const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
    const valueValidationInput = validationInput.value;
    const requiredLength = parseInt(validationInput.getAttribute("data-length"));

    if (valueValidationInput.length === requiredLength) {
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.add("invalid");
    }
})
