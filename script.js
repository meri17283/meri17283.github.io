document.addEventListener("DOMContentLoaded", function () {
    // *** Efek Fade-in Saat Halaman Dimuat ***
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 3s";
        document.body.style.opacity = "1";
    }, 200);
    document.getElementById("download-cv").addEventListener("click", function () {
        const element = document.body; // Seluruh halaman akan dikonversi
        html2pdf().from(element).save("CV_Merinda_Riski_Puspita_Sari.pdf");
    });
});
