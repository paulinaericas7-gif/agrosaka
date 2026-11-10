// ==========================================
// AGRO SAKA - INTERACTIVE WEBSITE (REVISI)
// ==========================================


// 1. MENU NAVIGASI HP
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    const isOpen = navMenu.classList.toggle("active");

    menuToggle.innerHTML = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
    );
  });

  // Tutup menu setelah klik link
  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      menuToggle.innerHTML = "☰";
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu navigasi");
    });
  });

  // Tutup menu ketika klik di luar
  document.addEventListener("click", function (event) {
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      navMenu.classList.remove("active");
      menuToggle.innerHTML = "☰";
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu navigasi");
    }
  });
}


// 2. NAVBAR SHADOW SAAT SCROLL
const navbar = document.getElementById("navbar");

if (navbar) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });
}


// 3. ANIMASI KONTEN SAAT SCROLL (REVEAL)
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const revealObserver = new IntersectionObserver(
    function (entries, observer) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(function (element) {
    revealObserver.observe(element);
  });

} else {

  // Cadangan untuk browser lama
  revealElements.forEach(function (element) {
    element.classList.add("show");
  });

}


// 4. TOMBOL KEMBALI KE ATAS
const backTop = document.getElementById("backTop");

if (backTop) {

  window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
      backTop.classList.add("show");
    } else {
      backTop.classList.remove("show");
    }

  }, { passive: true });

  backTop.addEventListener("click", function () {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


// 5. EFEK SAPAAN DI KONSOL
console.log(
  "%c🌱 Selamat Datang di AGRO SAKA!",
  "color: #159447; font-size: 22px; font-weight: bold;"
);

console.log(
  "%cSaya menanam. Saya merawat. Saya memanen. Saya mengolah. Saya menghasilkan.",
  "color: #07552f; font-size: 13px;"
);


// 6. PEMERIKSAAN GAMBAR
document.querySelectorAll("img").forEach(function (image) {

  image.addEventListener("error", function () {
    console.warn(
      "Gambar tidak ditemukan. Periksa nama file:",
      image.getAttribute("src")
    );
  });

});


// 7. NOTIFIKASI SIAP
console.log("Video AGRO SAKA dan tautan naskah telah dipasang.");
console.log("Website AGRO SAKA siap diperiksa.");
