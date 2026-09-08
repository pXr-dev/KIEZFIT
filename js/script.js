// ==========================================
// DOM-ELEMENTE
// ==========================================

const scrollTopButton = document.getElementById("scroll-top");
const scrollBottomButton = document.getElementById("scroll-bottom");

const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");

const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("main-navigation");


// ==========================================
// SCROLL-NAVIGATION
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

function scrollToElement(element) {
    element.scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================
// SCROLL-BUTTONS
// ==========================================

function scrollToPreviousSection() {
    const currentSection = getCurrentSection();

    if (currentSection > 0) {
        scrollToElement(sections[currentSection - 1]);
    } else {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

function scrollToNextSection() {
    const currentSection = getCurrentSection();

    if (currentSection < sections.length - 1) {
        scrollToElement(sections[currentSection + 1]);
    } else {
        scrollToElement(footer);
    }
}

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

scrollTopButton.addEventListener("click", scrollToPreviousSection);
scrollBottomButton.addEventListener("click", scrollToNextSection);

window.addEventListener("scroll", updateScrollButtons);

updateScrollButtons();


// ==========================================
// HAMBURGER-MENÜ
// ==========================================

function closeNavigation() {
    navigation.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
}

hamburger.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    hamburger.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isOpen);
});

const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach(link => {
    link.addEventListener("click", closeNavigation);
});
