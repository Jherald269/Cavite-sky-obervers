// Optional: Navigation toggle for smaller screens
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
});

//Function for close and open modal
function openModal(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
}


function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("open");
}

