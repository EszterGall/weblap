// Az összes nagyítható kép kiválasztása
const images = document.querySelectorAll(".kep");

// Nagyítás funkció
images.forEach(image => {
    image.addEventListener("click", () => {
        // Ellenőrizzük, hogy nagyított-e már
        if (image.style.transform === 'scale(1.5)') {
            // Visszaállítás eredeti méretre
            image.style.transform = 'scale(1)';
        } else {
            // Nagyítás
            image.style.transform = 'scale(1.5)';
        }
    });
});

// Virágszirom-effektus
function createPetals() {
    const menu = document.querySelector('.menu');
    for (let i = 0; i < 10; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = `${Math.random() * menu.offsetWidth}px`;
        petal.style.top = `0px`;
        menu.appendChild(petal);

        // Virágszirom eltávolítása animáció után
        setTimeout(() => {
            petal.remove();
            activePetals--; // Csökkentjük az aktív szirmok számát
        }, 2000);
    }
}

// Dokumentum készenléti állapota jQuery-vel
$(document).ready(function() {
    // Csúszka eseményének kezelése
    $("#etelSkala").on("input", function() {
        // Az aktuális érték lekérése
        let value = $(this).val();
        
        // Progress elem értékének frissítése
        $("#etelProgress").val(value);
    });
});

$(document).ready(function () {
    // Form elküldésekor
    $('#myform').on('submit', function (event) {
        event.preventDefault(); // Alapértelmezett küldés letiltása

        let correctAnswers = 0; // Helyes válaszok számlálója

        // 1. Kérdés ellenőrzése
        if ($("input[name='f1']:checked").val() === 'jo1') {
            correctAnswers++;
        }

        // 2. Kérdés ellenőrzése
        if ($('#lista').val() === 'jo2') {
            correctAnswers++;
        }

        // 3. Kérdés ellenőrzése
        if ($("input[name='f3']:checked").val() === 'jo3') {
            correctAnswers++;
        }

        // 4. Kérdés ellenőrzése
        if ($('#fanclub').val() === 'jo4') {
            correctAnswers++;
        }

        // 5. Kérdés ellenőrzése (több válasz)
        let selectedCheckboxes = $("input[name='f5[]']:checked").map(function () {
            return $(this).val();
        }).get();
        if (selectedCheckboxes.includes("Dope") && selectedCheckboxes.includes("Not Today") && selectedCheckboxes.length === 2) {
            correctAnswers++;
        }

        // 6. Kérdés ellenőrzése
        if ($("#vezeto").val().toLowerCase().trim() === 'kim namjoon') {
            correctAnswers++;
        }

        // Visszajelzés megjelenítése
        let feedbackMessage = `Helyes válaszok száma: ${correctAnswers}/6`;
        if (correctAnswers === 6) {
            feedbackMessage += " 🎉 Gratulálok, tökéletesen teljesítettél!";
        } else if (correctAnswers >= 4) {
            feedbackMessage += " 😊 Nagyszerű munka, jól ismered a BTS-t!";
        } else {
            feedbackMessage += " 😅 Még van mit tanulni a BTS-ről.";
        }

        // Megoldások megjelenítése az oldalon
        $('#megoldas').text(feedbackMessage).css("color", correctAnswers === 6 ? "green" : "orange");
    });

    // Form alaphelyzetbe állításakor
    $('#myform').on('reset', function () {
        $('#megoldas').text(""); // Üzenet törlése
    });
});

$(document).ready(function() {
    // Form elküldése előtt
    $("#mehet").click(function(event) {
        event.preventDefault(); // Megakadályozza az alapértelmezett form elküldést
            
        // Itt jelenik meg a "Köszönöm a választ!" üzenet
        $("#thanksMessage").text("Köszönöm a választ!").show();
    });
});

$(document).ready(function () {
    const $lightbox = $("#lightbox");
    const $lightboxkep = $("#lightboxkep");
    const $panel = $("#panel");

    // Lightbox megjelenítése képre kattintva
    $(".thumbnail").on("click", function () {
        const fullImageSrc = $(this).data("full"); // Teljes méretű kép elérése
        $lightboxImg.attr("src", fullImageSrc); // Lightbox kép beállítása
        $lightbox.fadeIn(); // Lightbox megjelenítése

        // Panel animáció egyszerre csak egy példányban
        if (!$panel.is(":animated")) {
            $panel.slideDown(500);
        }
    });

    // Lightbox bezárása
    function closeLightbox() {
        $lightbox.fadeOut(); // Lightbox elrejtése
    }

    $("#close").on("click", closeLightbox);

    $lightbox.on("click", function (e) {
        if ($(e.target).is("#lightbox, #lightboxekp")) {
            closeLightbox();
        }
    });
});

$(document).ready(function () {
    // Képek listája
    const images = [
        "bts.jpg",
        "bigbang.jpg",
        "blackpink.webp",
        "girls.webp"
    ];
    let currentIndex = 0;

    // Frissíti a megjelenített képet
    function updateImage() {
        $("#current-image").fadeOut(200, function () { // Kép elhalványítása
            $(this).attr("src", images[currentIndex]).fadeIn(200); // Új kép beállítása és megjelenítése
        });
    }

    // Előző gomb
    $("#prev-btn").on("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    // Következő gomb
    $("#next-btn").on("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    // Kezdeti kép megjelenítése (nem feltétlenül szükséges, de szemléletes)
    updateImage();
});

