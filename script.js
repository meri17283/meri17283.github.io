document.addEventListener("DOMContentLoaded", function () {
    // Efek fade-in saat halaman dimuat
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 3s";
        document.body.style.opacity = "1";
    }, 200);
});