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

