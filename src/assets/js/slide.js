const slides = document.querySelectorAll(".swiper-slide")

slides.forEach((slide) => {
    function stopSlide() {
        swiper.autoplay.stop()
    }

    function playSlide() {
        swiper.autoplay.start()
    }

    slide.addEventListener("mouseenter",stopSlide)
    slide.addEventListener("mouseleave",playSlide)
})