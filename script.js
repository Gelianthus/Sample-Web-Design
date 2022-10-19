// HTML Element Declarations

const headerElem = document.querySelector("header");
const mainElem = document.querySelector("main");

const exploreProjectButton = document.getElementById("exploreProjectButton");
const projectUL = document.getElementById("projectUL");

const poems = document.getElementById("poems");
const articles = document.getElementById("articles");
const shortStories = document.getElementById("short-stories");

const aboutUs = document.getElementById("aboutUs");
const placeCommission = document.getElementById("placeCommission");

const subSectionContainer = document.getElementById("subSectionContainer");
const originButton = document.getElementById("originButton");
const goalsButton = document.getElementById("goalsButton");
const policiesButton = document.getElementById("policiesButton");
const faqButton = document.getElementById("faqButton");

const headerUL = document.getElementById("headerUL");
const menuButton = document.getElementById("menuButton");

const originSection = document.getElementById("origin");
const goalsSection = document.getElementById("goals");
const policiesSection = document.getElementById("policies");
const faqSection = document.getElementById("faq");

// Scripts -------------------------------------------------------------------------------


// Calculated Sizing

poems.style.scrollMarginTop = headerElem.clientHeight * 1.2 + "px";
articles.style.scrollMarginTop = headerElem.clientHeight * 1.2 + "px";
shortStories.style.scrollMarginTop = headerElem.clientHeight * 1.2 + "px";

aboutUs.style.scrollMarginTop = headerElem.clientHeight * 1.2 + "px";
placeCommission.style.scrollMarginTop = headerElem.clientHeight * 1.2 + "px";

mainElem.style.marginTop = headerElem.clientHeight + "px";


// Expand Explore Button

exploreProjectButton.addEventListener("click", function(){
    if(projectUL.classList.contains("visibility-display")) {
        projectUL.classList.remove("visibility-display");
    } else {
        projectUL.classList.add("visibility-display");
    }
})

projectUL.addEventListener("mouseleave", function() {
    projectUL.classList.add("visibility-display");
})

// Slider for About Us Section

originButton.addEventListener("click", function() {
    subSectionContainer.style.transform = "translateX(0%)";
    subSectionContainer.style.height = originSection.clientHeight + "px";
    originButton.setAttribute("data-active", "true");
    goalsButton.setAttribute("data-active", "false");
    policiesButton.setAttribute("data-active", "false");
    faqButton.setAttribute("data-active", "false");
})

goalsButton.addEventListener("click", function() {
    subSectionContainer.style.transform = "translateX(-100%)";
    subSectionContainer.style.height = goalsSection.clientHeight + "px";
    originButton.setAttribute("data-active", "false");
    goalsButton.setAttribute("data-active", "true");
    policiesButton.setAttribute("data-active", "false");
    faqButton.setAttribute("data-active", "false");
})

policiesButton.addEventListener("click", function() {
    subSectionContainer.style.transform = "translateX(-200%)";
    subSectionContainer.style.height = policiesSection.clientHeight + "px";
    originButton.setAttribute("data-active", "false");
    goalsButton.setAttribute("data-active", "false");
    policiesButton.setAttribute("data-active", "true");
    faqButton.setAttribute("data-active", "false");
})

faqButton.addEventListener("click", function() {
    subSectionContainer.style.transform = "translateX(-300%)";
    subSectionContainer.style.height = faqSection.clientHeight + "px";
    originButton.setAttribute("data-active", "false");
    goalsButton.setAttribute("data-active", "false");
    policiesButton.setAttribute("data-active", "false");
    faqButton.setAttribute("data-active", "true");
})

// Sidebar 

menuButton.addEventListener("click", function() {
    const expanded = headerUL.getAttribute("data-expanded");
    if(expanded === "false") {
        headerUL.setAttribute("data-expanded", "true");
        menuButton.style.fill = "whitesmoke"
    } else if(expanded === "true") {
        headerUL.setAttribute("data-expanded", "false");
        menuButton.style.fill = "hsla(0, 0%, 40%, 1)"
    }
})

// Window Resize

window.addEventListener("resize", function(){
    if (originButton.getAttribute("data-active") === "true") {
        subSectionContainer.style.height = originSection.clientHeight + "px";
    } else if (goalsButton.getAttribute("data-active") === "true") {
        subSectionContainer.style.height = goalsSection.clientHeight + "px";
    } else if (policiesButton.getAttribute("data-active") === "true") {
        subSectionContainer.style.height = policiesSection.clientHeight + "px";
    } else if (faqButton.getAttribute("data-active") === "true") {
        subSectionContainer.style.height = faqSection.clientHeight + "px";
    }
})

window.addEventListener("load", function() {
    subSectionContainer.style.height = originSection.clientHeight + "px";
})
