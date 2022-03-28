import {mobileClose} from "../js/header.js"

const headerNavbar = document.querySelector("header.main-header")
const aboutSection = document.querySelector("section#about")

function scrollNav() {
    if(window.scrollY >= 10) {
        headerNavbar.classList.add("active")
    } else {
        headerNavbar.classList.remove("active")
    }
}
window.addEventListener("scroll", scrollNav)

const sectionScroll = document.getElementsByClassName("scroll")
function activeScroll() {
    [...sectionScroll].forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top
        if(window.scrollY > sectionTop) {
            section.classList.add("active")
        } else if (window.matchMedia("(max-width: 1400px)").matches) {
            aboutSection.classList.add("scroll")
        } 
    })
}
window.addEventListener("scroll",activeScroll)

const sectionLinksNav = document.querySelectorAll("a[href^='#']")
function scrollToSection(e) {
    mobileClose()
    e.preventDefault()
    const linkHref = e.currentTarget.getAttribute("href")
    const linkSection = document.querySelector(linkHref)
    const headerNavbarHeight = headerNavbar.offsetHeight
    
    window.scrollTo({
        top: linkSection.offsetTop - headerNavbarHeight,
        behavior: "smooth"
    })
}

sectionLinksNav.forEach((link)=>{
    link.addEventListener("click",scrollToSection)
})
