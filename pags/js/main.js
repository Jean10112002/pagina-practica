


//menu let ubicacionprincipal = window.pageYOffset; //0
let ubicacionprincipal = window.pageYOffset; //0
AOS.init();
window.addEventListener("scroll" ,function(){
    let desplazamientoactual= window.pageYOffset; //1
    if(ubicacionprincipal>=desplazamientoactual){ 
        document.getElementsByTagName("nav")[0].style.top="0px"
    }
    else{
        document.getElementsByTagName("nav")[0].style.top="-100px"
    }
    ubicacionprincipal=desplazamientoactual;
    console.log(window.pageYOffset)
})

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;
document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
   if(semaforo){
       document.querySelectorAll(".hamburguer")[0].style.color="white";
       semaforo=false;
   }
   else{
       document.querySelectorAll(".hamburguer")[0].style.color="black";
       semaforo=true;
   }
    enlacesHeader.classList.toggle("menudos")
})

