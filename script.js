document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("thankyouModal").style.display = "flex";
});

function closeModal() {
    document.getElementById("thankyouModal").style.display = "none";
}
