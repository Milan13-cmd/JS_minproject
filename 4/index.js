// var elem1 = document.querySelector("#elem1")
// var elemimg = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove", function(det){
//     elemimg.style.left = det.x+"px"
//     elemimg.style.top = det.y+"px" 
// })

// elem1.addEventListener("mouseenter", function(det){
//     elemimg.style.opacity = 1
// })

// elem1.addEventListener("mouseleave", function(det){
//     elemimg.style.opacity = 0
// })


// var elem = document.querySelectorAll(".elem")

// elem.forEach(function(val){
//     console.log(val)

// });

var elem = document.querySelectorAll(".elem")

elem.forEach(function(val){
     
    val.addEventListener("mouseenter", function(){
         val.childNodes[3].style.opacity =1
    });
    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0
   });
   val.addEventListener("mousemove", function(det){
    val.childNodes[3].style.left =det.x+"px"
    val.childNodes[3].styel.top = det.y+"px"
});
});