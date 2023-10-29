// Loop to show all Lab imgs
let labCarouselInner = document.querySelector(".lab-gallery .carousel-inner");
imgCont (17, labCarouselInner, "imgs/ha-labs/lab", "jpg");

// Loop to show all Facebook reviews screeshot
let SocialCarouselInner = document.querySelector(".social-media .clients-carousel .carousel-inner");
imgCont (19, SocialCarouselInner, "imgs/ha-revs/img", "png");

// Function to create Img container
function imgCont (numberOfImgs, imgSecContainer, path, filetype) {
    for (i = 1; i < numberOfImgs; i++) {
        let imgContainer = document.createElement("div");
        imgContainer.className = "carousel-item";
        let newImg = document.createElement("img");
        newImg.className = "d-block w-100";
        newImg.src = `${path} (${i}).${filetype}`;
        imgContainer.appendChild(newImg);
        imgSecContainer.appendChild(imgContainer);
    }
}

// Enable tooltips everywhere
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Scroll to Top
let toTopBtn = document.querySelector(".to-top");

window.onscroll = function () {
    if (this.scrollY >= screen.height) {
        toTopBtn.classList.add("show");
    } else {
        toTopBtn.classList.remove("show");
    }
};
toTopBtn.onclick = function () {
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });
};

