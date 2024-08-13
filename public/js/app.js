let naopen =document.querySelector(".close")
let nav = document.querySelector("nav")
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