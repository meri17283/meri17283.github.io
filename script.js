document.addEventListener("DOMContentLoaded", function () {
    // *** Efek Fade-in Saat Halaman Dimuat ***
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 3s";
        document.body.style.opacity = "1";
    }, 200);
});
