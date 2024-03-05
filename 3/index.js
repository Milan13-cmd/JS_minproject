 var main = document.querySelector("#main")
 var crs = document.querySelector(".cursor")

 main.addEventListener("mousemove",function(de){
    crs.style.left =  de.x+"px"
    crs.style.top =  de.y+"px"
 })