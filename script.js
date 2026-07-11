// 1. DİNAMİK HEADER & FOOTER ŞABLONU ENJEKSİYONU
document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
    <header>
        <div class="container header-container">
            <div class="logo"><a href="index.html"><i class="fa-solid fa-bolt"></i> ÇALIŞKAN <span>OTO ELEKTRİK</span></a></div>
            <nav>
                <ul>
                    <li><a href="index.html">Anasayfa</a></li>
                    <li><a href="hizmetler.html">Hizmetlerimiz</a></li>
                    <li><a href="iletisim.html">İletişim & Konum</a></li>
                    <li><a href="hakkımızda.html">Hakkımızda</a></li>
                </ul>
            </nav>
            <div class="nav-phone"><a href="tel:05464341862"><i class="fa-solid fa-phone"></i> 0555 555 55 55</a></div>
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
        nextBtn.addEventListener("click", () => {
            nextSlide();
            resetTimer();
        });

        prevBtn.addEventListener("click", () => {
            prevSlide();
            resetTimer();
        });

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
