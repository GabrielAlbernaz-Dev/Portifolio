export const headerNav = document.querySelector("nav.top-nav ul")
export const hamburgerIcon = document.querySelector(".bars")

function mobileOpen() {
    const navElements = [headerNav,hamburgerIcon]
    navElements.forEach((element) =>{
        element.classList.toggle("active")
    })

    if(headerNav.classList.contains("active")) {
        document.body.classList.add("ovf-hidden")
    } else {
        document.body.classList.remove("ovf-hidden")
    }
}

export function mobileClose(){ 
    const mobileElements = [headerNav,hamburgerIcon]
    if(headerNav.classList.contains("active")) {
        mobileElements.forEach((element) =>{
            element.classList.remove("active")
        })
        document.body.classList.remove("ovf-hidden")
    }

    console.log()
}

hamburgerIcon.addEventListener("click",mobileOpen)