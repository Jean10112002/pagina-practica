AOS.init();


let ubicacionprincipal = window.pageYOffset; //0
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
document.querySelectorAll(".hamburguer")[0].addEventListener("click", function() {
    if (semaforo) {
        document.querySelectorAll(".hamburguer > i")[0].style.color = "white";
        semaforo = false;
    } else {
        document.querySelectorAll(".hamburguer > i")[0].style.color = "#ec1c25";
        semaforo = true;
    }
    enlacesHeader.classList.toggle("menudos")
})
