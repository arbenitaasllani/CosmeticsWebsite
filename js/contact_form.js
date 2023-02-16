const form = document.getElementById("form");
const subject = document.getElementById("subject");
const contact_name = document.getElementById("contact_name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
event.preventDefault();

if (subject.value === "" || subject.value.length < 3) {
    alert("⛔Subject cannot be empty or at least 3 characters!");
    subject.focus();
    return;
}
if (contact_name.value === "" || subject.value.length < 3) {
    alert("⛔Name cannot be empty or at least 3 characters!");
    contact_name.focus();
    return;
}
if (email.value === "") {
    alert("⛔Email is required!");
    email.focus();
    return;
}
if (message.value === "") {
    alert("⛔To send the message you need to write a message!");
    message.focus();
    return;
}
    alert("🥳Message submitted successfully!");
    window.location.href = "./index.html";
});