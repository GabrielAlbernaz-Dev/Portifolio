const loading = document.querySelector(".loading")
window.addEventListener("load", function(){
    setTimeout(function(){
        loading.classList.add("disable")
    },2500)
})