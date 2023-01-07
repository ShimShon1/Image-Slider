let leftArrow = document.querySelector(".left-arrow")  
let rightArrow = document.querySelector(".right-arrow")  
let points = Array.from(document.querySelectorAll(".point"))
let mainImg = document.querySelector(".main-pic")

let currentIndex = 2;
let picsArray = ["nexus.webp","ori.webp","yeled.webp","drone.webp","zvuv.webp"]


rightArrow.addEventListener("click", ()=>{
    currentIndex++ 
    updateScreen()

} )

leftArrow.addEventListener("click", ()=>{
    currentIndex-- 
    updateScreen()

} )

points.forEach(x =>{
   x.addEventListener("click",e =>{
    currentIndex = points.indexOf(e.target);
    updateScreen()
   });
})

function updateScreen(){

    if(currentIndex > 4){
        currentIndex = 0;
    }else if(currentIndex < 0){
        currentIndex = 4;

    }

    mainImg.src = picsArray[currentIndex]

    points.forEach(function(x){
        if(points[currentIndex] == x){
         x.style.width = "5.2rem"

        }else{
            x.style.width = "4rem"
        }
    })
}

function autoScroll(){
    setTimeout(function(){
        currentIndex++
        updateScreen()
        autoScroll()
    },5000)
    
}

updateScreen()
autoScroll()