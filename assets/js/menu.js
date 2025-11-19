
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");

    document.querySelectorAll(".menu-item").forEach(function (item) {
        item.addEventListener("click", function () {
            const img = item.querySelector(".dish-image");
            if (img) {
                lightboxImg.src = img.src;
                lightbox.style.display = "flex"; // show centered
            }
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Close when clicking outside the image
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});