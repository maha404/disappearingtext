"use strict"

let titleEl = document.getElementById("title_text"); 

window.addEventListener("scroll", function(){
    let y = window.scrollY;
    if (y >= 400){
        titleEl.style.display= "none"; 
    }else{
        titleEl.style.display = "block"; 
    }

}); 