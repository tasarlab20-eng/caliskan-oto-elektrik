// 1. DİNAMİK HEADER & FOOTER ŞABLONU ENJEKSİYONU & MOBİL MENÜ MOTORU
document.addEventListener("DOMContentLoaded", function () {
    // Telefon numarası alanı kaldırıldı, menü tasarımı sadeleştirildi
    const headerHTML = `
    <header class="main-header">
        <div class="container header-container">
            <div class="logo">
                <a href="index.html"><i class="fa-solid fa-bolt"></i> ÇALIŞKAN <span>OTO ELEKTRİK</span></a>
            </div>
            
            <button class="menu-toggle" id="mobile-menu-btn" aria-label="Menüyü Aç">
                <i class="fa-solid fa-bars"></i>
            </button>

            <nav class="nav-menu" id="nav-menu">
                <ul>
                    <li><a href="index.html">Anasayfa</a></li>
                    <li><a href="hizmetler.html">Hizmetlerimiz</a></li>
                    <li><a href="iletisim.html">İletişim & Randevu</a></li>
                    <li><a href="hakkımızda.html">Hakkımızda</a></li>
                </ul>
            </nav>
        </div>
    </header>`;

    const footerHTML = `
    <footer>
        <div class="container">
            <p>&copy; 2026 Çalışkan Oto Elektrik. Tüm Hakları Saklıdır.</p>
        </div>
    </footer>`;

    if (document.getElementById("header-placeholder")) {
        document.getElementById("header-placeholder").innerHTML = headerHTML;
    }
    if (document.getElementById("footer-placeholder")) {
        document.getElementById("footer-placeholder").innerHTML = footerHTML;
    }

    // MOBİL MENÜ TIKLAMA VE AÇMA/KAPAMA DİNLEYİCİSİ
    const menuBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", function (e) {
            e.stopPropagation(); // Tıklama olayının dışarı taşmasını engeller
            navMenu.classList.toggle("active");

            // İkonu açılınca X, kapanınca Hamburger yapar
            const icon = menuBtn.querySelector("i");
            if (navMenu.classList.contains("active")) {
                icon.className = "fa-solid fa-xmark";
            } else {
                icon.className = "fa-solid fa-bars";
            }
        });

        // Menü açıkken ekranda boş veya başka bir yere tıklanırsa menüyü otomatik kapatır
        document.addEventListener("click", function (e) {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove("active");
                const icon = menuBtn.querySelector("i");
                if (icon) icon.className = "fa-solid fa-bars";
            }
        });
    }

    // 2. 5'Lİ SLIDER KONTROL MEKANİZMASI
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove("active"));
            dots.forEach(dot => dot.classList.remove("active"));

            if (index >= slides.length) currentSlide = 0;
            if (index < 0) currentSlide = slides.length - 1;

            slides[currentSlide].classList.add("active");
            dots[currentSlide].classList.add("active");
        }

        function nextSlide() {
            currentSlide++;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide--;
            showSlide(currentSlide);
        }

        // Buton Tıklamaları
        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                nextSlide();
                resetTimer();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                prevSlide();
                resetTimer();
            });
        }

        // Nokta Tıklamaları
        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                currentSlide = i;
                showSlide(currentSlide);
                resetTimer();
            });
        });

        // Otomatik Geçiş Zamanlayıcı (4 Saniyede Bir)
        function startTimer() {
            slideInterval = setInterval(nextSlide, 4000);
        }

        function resetTimer() {
            clearInterval(slideInterval);
            startTimer();
        }

        startTimer();
    }
});
