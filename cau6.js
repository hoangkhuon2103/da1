const btn = document.getElementById("btn_pay");
const message = document.getElementById("message");


btn.addEventListener("click", () => {
    message.style.display = "block";
});


message.addEventListener("click", () => {
    message.style.display = "none";
});