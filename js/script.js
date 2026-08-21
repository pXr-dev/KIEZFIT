// ==========================================
// SCROLL-NAVIGATION
// ==========================================

const scrollTopButton = document.getElementById("scroll-top");
const scrollBottomButton = document.getElementById("scroll-bottom");

const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");


// ==========================================
// AKTUELLEN ABSCHNITT ERMITTELN
// ==========================================

function getCurrentSection() {
    const scrollPosition = window.scrollY + 100;

    let currentSection = 0;

    sections.forEach((section, index) => {
        if (section.offsetTop <= scrollPosition) {
            currentSection = index;
        }
    });

    return currentSection;
}


// ==========================================
// NACH OBEN SCROLLEN
// ==========================================

scrollTopButton.addEventListener("click", () => {
    const currentSection = getCurrentSection();

    if (currentSection > 0) {
        sections[currentSection - 1].scrollIntoView({
            behavior: "smooth"
        });
    } else {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});


// ==========================================
// NACH UNTEN SCROLLEN
// ==========================================

scrollBottomButton.addEventListener("click", () => {
    const currentSection = getCurrentSection();

    if (currentSection < sections.length - 1) {
        sections[currentSection + 1].scrollIntoView({
            behavior: "smooth"
        });
    } else {
        footer.scrollIntoView({
            behavior: "smooth"
        });
    }
});


// ==========================================
// SCROLL-BUTTON STATUS AKTUALISIEREN
// ==========================================

function updateScrollButtons() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const isAtTop = scrollPosition <= 0;

    const isAtBottom =
        scrollPosition + windowHeight >= documentHeight - 1;

    scrollTopButton.disabled = isAtTop;
    scrollBottomButton.disabled = isAtBottom;
}


// ==========================================
// SCROLL-EVENT
// ==========================================

window.addEventListener("scroll", updateScrollButtons);

updateScrollButtons();


// ==========================================
// HAMBURGER-MENÜ
// ==========================================

const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("main-navigation");


// ==========================================
// MENÜ ÖFFNEN / SCHLIESSEN
// ==========================================

hamburger.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    hamburger.classList.toggle("active");

    hamburger.setAttribute("aria-expanded", isOpen);
});


// ==========================================
// NAVIGATION NACH LINK-KLICK SCHLIESSEN
// ==========================================

const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");

        hamburger.classList.remove("active");

        hamburger.setAttribute("aria-expanded", "false");
    });
});