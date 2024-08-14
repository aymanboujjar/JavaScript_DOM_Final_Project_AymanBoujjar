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
    a.children[1].textContent="STARTERS"
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