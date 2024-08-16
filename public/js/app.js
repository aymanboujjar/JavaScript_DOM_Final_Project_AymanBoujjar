let naopen =document.querySelector(".close")
let nav = document.querySelector("nav")
let starters = document.querySelector("#starters")
let breakfast = document.querySelector("#breakfast")
let lunch = document.querySelector("#lunch")
let dinner = document.querySelector("#dinner")
naopen.addEventListener("click",()=>{
    nav.children[3].style.display="flex"
    nav.children[1].style.display="none"
    nav.children[2].style.display="flex"
    nav.children[2].addEventListener("click",()=>{
        nav.children[3].style.display="none"
        nav.children[1].style.display="flex"
        nav.children[2].style.display="none"
    })
})

starters.addEventListener("click",()=>{
    let a = document.querySelector(".starters")
    setTimeout(() => {
        a.children[1].textContent="STARTERS"
    }, 200);
    console.log(a.children[2]);
    a.classList.add("itemj")
    setTimeout(() => {
        a.classList.remove("itemj")
    }, 1000);

})
breakfast.addEventListener("click",()=>{

    let a = document.querySelector(".starters")
    a.classList.add("itemj")
    setTimeout(() => {
        
        a.children[1].textContent="breakfast"
    },200);
    setTimeout(() => {
        a.classList.remove("itemj")
    }, 1000);
})
dinner.addEventListener("click",()=>{
    let a = document.querySelector(".starters")
    a.classList.add("itemj")
    setTimeout(() => {
        a.children[1].textContent="dinner" 
    }, 200);
    setTimeout(() => {
        a.classList.remove("itemj")
    }, 1000);
})
lunch.addEventListener("click",()=>{
    let a = document.querySelector(".starters")
    a.classList.add("itemj")
    setTimeout(() => {
        a.children[1].textContent="lunch"
    }, 200);
    setTimeout(() => {
        a.classList.remove("itemj")
    }, 1000);
})





let nextBtns = document.querySelectorAll(".next")
let containers = document.querySelectorAll(".carousel-container")



let currentIndex = 0
const slideImage = (index, myBtn) => {

    let carouselBtnAttribute = myBtn.getAttribute("carouselBtn")

    containers.forEach(container => {
        if (container.id == carouselBtnAttribute) {

            let slides = container.querySelectorAll(".slide")
            let camera = container.querySelector(".carousel")
            let slideWidth = slides[0].clientWidth
            let indicators = container.querySelectorAll('.indicator')
            if (index < 0) {
                index = slides.length - 1
            } else if (index >= slides.length) {
                index = 0
            }

            indicators.forEach(indicator => {
                indicator.classList.remove('activeIndicator')
            });
            indicators[index].classList.add("activeIndicator")
            camera.style.transform = `translateX(-${slideWidth * index}px)`
            currentIndex = index
        }
    });


}

nextBtns.forEach(next => {
    
    next.addEventListener("click", (event) => { slideImage(currentIndex + 1, event.target) })
    setInterval(() => {
        next.click()
    }, 3000);
});
// 





containers.forEach(container => {
    
    let slides = container.querySelectorAll(".slide")
    let indicatorsGrp = document.createElement("div")
    indicatorsGrp.classList.add("indicators-grp")
    container.appendChild(indicatorsGrp)
    
    slides.forEach(slide => {
        let indicator = document.createElement("div")
        indicator.classList.add("indicator")
        indicatorsGrp.appendChild(indicator)
    });
    
    // indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator')
});

let modal = document.getElementById("loginModal");
let btn = document.querySelector(".btn2");

btn.addEventListener("click",()=>{
    modal.style.display = "block";
    modal.addEventListener("click",()=>{
        modal.style.display = "none";
    })
})
let modal1 = document.getElementById("loginModal2");
let btn1 = document.querySelector(".btn1");

btn1.addEventListener("click",()=>{
    modal1.style.display = "block";
    modal1.addEventListener("click",()=>{
        modal1.style.display = "none";
    })
})
let modal2 = document.getElementById("loginModal2");
let btn2 = document.querySelector(".bg");

btn2.addEventListener("click",()=>{
    modal2.style.display = "block";
    modal2.addEventListener("click",()=>{
        modal2.style.display = "none";
    })
})



const carousel4 = document.querySelector('.carousel4');
const items4 = document.querySelectorAll('.carousel-item4');

let currentIndex4 = 0;
let isTransitioning4 = false;
const totalItems4 = items4.length;

items4.forEach(item => {
    const clone = item.cloneNode(true);
    carousel4.appendChild(clone);
});

function updateCarousel4() {
    carousel4.style.transition = 'transform 0.5s ease-in-out';
    carousel4.style.transform = `translateX(-${currentIndex4 * (100 / 3)}%)`;
}

function nextSlide4() {
    if (isTransitioning4) return;
    isTransitioning4 = true;

    currentIndex4++;
    updateCarousel4();

    if (currentIndex4 === totalItems4) {
        setTimeout(() => {
            carousel4.style.transition = 'none';
            currentIndex4 = 0;
            carousel4.style.transform = `translateX(0)`;
            isTransitioning4 = false;
        }, 500);
    } else {
        setTimeout(() => {
            isTransitioning4 = false;
        }, 500);
    }
}

setInterval(nextSlide4, 3000);


const carousel5 = document.querySelector('.carousel5');
const items5 = document.querySelectorAll('.carousel-item5');

let currentIndex5 = 0;
let isTransitioning5 = false;
const totalItems5 = items5.length;
const visibleItems5 = 5; 
const itemWidthPercentage5 = 100 / visibleItems5;

items5.forEach(item => {
    const clone = item.cloneNode(true);
    carousel5.appendChild(clone);
});

function updateCarousel5() {
    carousel5.style.transition = 'transform 0.5s ease-in-out';
    carousel5.style.transform = `translateX(-${currentIndex5 * itemWidthPercentage5}%)`;
}

function nextSlide5() {
    if (isTransitioning5) return;
    isTransitioning5 = true;

    currentIndex5++;
    updateCarousel5();

    if (currentIndex5 === totalItems5) {
        setTimeout(() => {
            carousel5.style.transition = 'none';
            currentIndex5 = 0;
            carousel5.style.transform = `translateX(0)`;
            isTransitioning5 = false;
        }, 500);
    } else {
        setTimeout(() => {
            isTransitioning5 = false;
        }, 500);
    }
}

setInterval(nextSlide5, 3000);
