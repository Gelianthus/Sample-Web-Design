// HTML Element Declarations

const headerElem = document.querySelector("header");
const mainElem = document.querySelector("main");

const exploreProjectButton = document.getElementById("exploreProjectButton");
const projectUL = document.getElementById("projectUL");

const poems = document.getElementById("poems");
const articles = document.getElementById("articles");
const shortStories = document.getElementById("short-stories");

// Scripts 

poems.style.scrollMarginTop = headerElem.clientHeight + "px";
articles.style.scrollMarginTop = headerElem.clientHeight + "px";
shortStories.style.scrollMarginTop = headerElem.clientHeight + "px";

mainElem.style.paddingTop = headerElem.clientHeight + "px";

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