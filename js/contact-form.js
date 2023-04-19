const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

const handleFormSubmit = (event) => {
    event.preventDefault();

    const contactForm = event.target;
    const formData = new FormData(contactForm);

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    })
        .then(
            // () => inputs.forEach((input) => (input.value = "")),
            // () => textareas.forEach((textarea) => (textarea.value = "")),
            document.forms["contactForm"].reset(),
            alert("We have received your message. Thanks for contact with us.")
        )
        .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleFormSubmit);
