const modal = document.getElementById("pdfModal");
const viewer = document.getElementById("pdfViewer");
const title = document.getElementById("pdfTitle");

document.querySelectorAll(".pdf-link").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        title.textContent = this.dataset.title;
        viewer.src = this.dataset.pdf;

        modal.style.display = "flex";
    });

});

document.getElementById("closePdfModal")
.addEventListener("click", () => {

    modal.style.display = "none";
    viewer.src = "";

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";
        viewer.src = "";

    }

});

