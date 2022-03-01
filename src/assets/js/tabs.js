const tabs = document.querySelectorAll(".tabs li")
const contentTabs = document.querySelectorAll(".content-tabs .content")

function initTabs(tab,content) {
    tab[0].classList.add("active")
    content[0].classList.add("active")
}
initTabs(tabs,contentTabs)

function activeTab(index) {
    contentTabs.forEach((contentTab) => {
        contentTab.classList.remove("active")
    })
    tabs.forEach((contentTab) => {
        contentTab.classList.remove("active")
    })
    contentTabs[index].classList.add("active")
    tabs[index].classList.add("active")
}

tabs.forEach((tab,i) => {
    tab.addEventListener("click", ()=>{
        activeTab(i)
    })
})
