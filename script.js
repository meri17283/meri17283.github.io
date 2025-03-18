document.addEventListener("DOMContentLoaded", function () {
    // *** Efek Fade-in Saat Halaman Dimuat ***
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 3s";
        document.body.style.opacity = "1";
    }, 200);

    // *** Efek Animasi Saat Scroll ***
    const sections = document.querySelectorAll("section");

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Panggil sekali saat halaman dimuat
});
