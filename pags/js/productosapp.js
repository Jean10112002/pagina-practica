const filtrarPorDatos=(a)=>{
    texto.value = ''

    contenedor.style.marginTop = '2.5em'
    document.getElementById('todos').style.display = 'initial'
    texto.style.display = 'none'
    data.forEach(e => {
        if (e.objeto == a) {

            pintar(e)


        }
        contenedor.innerHTML = codeHtml
    })

}
const filtrar = () => {
    let textoIngresado = texto.value.toLowerCase()

    data.forEach(e => {
        let marca = e.marca.toLocaleLowerCase();
        let modelo = e.modelo.toLocaleLowerCase()

        if (marca.indexOf(textoIngresado) !== -1) {

            pintar(e)

        } else if (modelo.indexOf(textoIngresado) !== -1) {

            pintar(e)

        }

    })

    if (codeHtml == '') {
        console.log('no hay elemtno')
        noEncuentraProducto()
    }
    contenedor.innerHTML = codeHtml

}
const pintar = (e) => {

    console.log('entraste a la funcion papu')
    codeHtml += `<div class="producto__celulares" >
        <div class="producto__informacion">
        <div class="producto__img">
            <img src="${e.img}" alt="">
        </div>
         <div class="producto__info">
            <h3>${e.marca} ${e.modelo}</h3>
            <h3></h3>
            <a  class="producto__boton" id='${e.modelo}' >Más información</a>
        </div>
    </div>
</div>`;

}
const noEncuentraProducto = () => {
    codeHtml = `<div class="elementos" >
                <h2>Poducto no encontrado</h2>
                  <img src="https://i.pinimg.com/564x/26/b8/84/26b8840bf90d9f66ebe9f48c458ff9d1.jpg" class="img-error">
                <h2>La pagina está sufriendo ansiedad, no existe tu busqueda</h2>
              </div>`;

}

let data;
const buscarProductos=async()=>{
    try {
        const res=await fetch('js/productos.json')
        data=await res.json()
        data.forEach(e=>{
            let img = e.img;
            let modelo = e.modelo;
            let marca = e.marca;
            //console.log(img,modelo,marca,precio,año)
            codeHtml += `<div class="producto__celulares" >
            <div class="producto__informacion" >
                <div class="producto__img" >
                    <img src="${img}" alt="">
                </div>
                <div class="producto__info" >
                    <h3>${marca} ${modelo}</h3>
                    <a  class="producto__boton" id='${modelo}' >Más información</a>
                </div>
            </div>
        </div>`;
        })
        contenedor.innerHTML = codeHtml
    } catch (error) {
        console.log(error)
    }
}

buscarProductos()








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





let contenedor = document.querySelector('.grid-container')
let codeHtml = ''
/*let pintarInformacion=`
<div class="grid__img" data-aos="zoom-out-right" data-aos-duration="2000">
<img src="${e.img}" alt="">

</div>
<div class="grid__item">
<div class="grid__item__info" data-aos="zoom-out-down" data-aos-duration="2500">
    <h2>${e.marca} ${e.modelo}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ab. Amet rerum corrupti soluta temporibus necessitatibus, fugit consectetur. Cumque aliquid sint nemo adipisci, quos autem laudantium, tenetur ipsum ex doloribus porro, fuga ullam molestias corrupti ea! Temporibus quibusdam officia nobis.!</p>
</div>
<div class="grid__item__caracteristicas" data-aos="fade-up"
data-aos-anchor-placement="bottom-bottom" data-aos-duration="2700">
    <h2>Caracteristicas</h2>
    <div class="flex__caracteristicas" data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
        <b><p><i class="fas fa-mobile-alt"></i> Pantalla: 5.5",100</p></b>
        <b><p><i class="fas fa-microchip"></i> Procesador:Apple A11 Bionic</p></b>
        <b><p><i class="fas fa-database"></i> Ram: 3GB</p></b>
        <b><p><i class="fas fa-memory"></i> Almacenamiento: 64GB/256GB</p></b>
        <b><p><i class="fas fa-sd-card"></i> Expansion: sin microSD</p></b>
        <b><p><i class="fas fa-camera"></i> Camara: 12MP,Dual</p></b>
        <b><p><i class="fas fa-battery-full"></i> Batería: 12MP,2700 mAh</p></b>
        <b><p><i class="fas fa-code"></i> Os:iOS 11</p></b>
        <b><p><i class="fas fa-expand-arrows-alt"></i> Perfil: 7.5mm</p></b>
        <b><p><i class="fas fa-balance-scale"></i> Peso: 202g</p></b>
    </div>
</div>
</div>

`*/




contenedor.addEventListener('click',(e)=>{
    let idInformacion=e.target.id;
    let vistaProductos=document.getElementById('vistaProductos')  
    document.querySelector('.nav').style.display='none',contenedor.style.opacity='.2',botonFiltrar.style.display='none'

    document.body.style.overflow='hidden'
    vistaProductos.classList.add('mostrar__vista__productos')
    vistaProductos.style.overflow='scroll';
    //console.log(idInformacion)
    data.forEach(e=>{
        if(e.modelo==idInformacion){
           console.log(e.marca,e.modelo,e.precio)
           if(e.objeto=='celular'){
               console.log('presentar celular')
           }
           vistaProductos.innerHTML=`
           <div class="grid__img" data-aos="zoom-out-right" data-aos-duration="2000">
           <img src="${e.img}" alt="">
           
           </div>
           <div class="grid__item">
           <div class="grid__item__info" data-aos="zoom-out-down" data-aos-duration="2500">
                <div class='hamburguer__exit' id="boton__exit"><i class="fas fa-times"></i></div>
               <h2>${e.marca} ${e.modelo}</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ab. Amet rerum corrupti soluta temporibus necessitatibus, fugit consectetur. Cumque aliquid sint nemo adipisci, quos autem laudantium, tenetur ipsum ex doloribus porro, fuga ullam molestias corrupti ea! Temporibus quibusdam officia nobis.!</p>
           </div>
           <div class="grid__item__caracteristicas" data-aos="fade-up"
           data-aos-anchor-placement="bottom-bottom" data-aos-duration="2700">
               <h2>Caracteristicas</h2>
               <div class="flex__caracteristicas" data-aos="fade-up"
               data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
                   <b><p><i class="fas fa-mobile-alt"></i> Pantalla: 5.5",100</p></b>
                   <b><p><i class="fas fa-microchip"></i> Procesador:Apple A11 Bionic</p></b>
                   <b><p><i class="fas fa-database"></i> Ram: 3GB</p></b>
                   <b><p><i class="fas fa-memory"></i> Almacenamiento: 64GB/256GB</p></b>
                   <b><p><i class="fas fa-sd-card"></i> Expansion: sin microSD</p></b>
                   <b><p><i class="fas fa-camera"></i> Camara: 12MP,Dual</p></b>
                   <b><p><i class="fas fa-battery-full"></i> Batería: 12MP,2700 mAh</p></b>
                   <b><p><i class="fas fa-code"></i> Os:iOS 11</p></b>
                   <b><p><i class="fas fa-expand-arrows-alt"></i> Perfil: 7.5mm</p></b>
                   <b><p><i class="fas fa-balance-scale"></i> Peso: 202g</p></b>
               </div>
           </div>
           </div>
           
           `
        }
    })
    const botonExit=document.getElementById('boton__exit')
botonExit.addEventListener('click',()=>{
    vistaProductos.classList.remove('mostrar__vista__productos')
    document.querySelector('.nav').style.display='flex',contenedor.style.opacity='1',botonFiltrar.style.display='initial'

    document.body.style.overflow='scroll'
})
})






let texto = document.getElementById('texto')
texto.style.display = 'none'
texto.addEventListener('click', (e) => {
    texto.style.border = 'none';
    texto.style.borderBottom = '2px solid tomato';
})





texto.addEventListener('input', (e) => {

    texto.style.borderBottom = '2px solid tomato';
    console.log(texto.value)
    codeHtml = ''
    filtrar()


})
let semaforo2 = false;
const buscadorLista = document.querySelector('.buscador__lista')
const botonFiltrar = document.getElementById('boton__filtrar')
botonFiltrar.addEventListener('click', () => {

    console.log('boton')

    if (semaforo2) {
        document.querySelector('#boton__filtrar i').style.color = '#ec1c25';
        semaforo2 = false;
    } else {
        document.querySelector('#boton__filtrar i').style.color = 'white';
        semaforo2 = true;
    }
    buscadorLista.classList.toggle('filter')


})





const filtrarCelulares = document.getElementById('celular')
const filtrarTodos = document.getElementById('todos')
const filtrarComputadores = document.getElementById('laptop')
const filtrarimpresorass = document.getElementById('impresora')
const cajaDeFiltrar = document.getElementById('cajafiltrar')

cajaDeFiltrar.addEventListener('click', (e) => {

    //console.log(e)
    if (e.target.id == 'laptop') {
        codeHtml = ''
        filtrarPorDatos('laptop')
    } else if (e.target.id == 'celular') {
        codeHtml = ''
        filtrarPorDatos('celular')
    } else if (e.target.id == 'impresora') {
        codeHtml = ''
        filtrarPorDatos('impresora')
    } else if (e.target.id == 'otros') {
        codeHtml = ''
        filtrarPorDatos('otro')
    } else if (e.target.id == 'todos') {
        codeHtml = ''
        texto.style.display = 'initial'
        data.forEach(e => {
            contenedor.style.marginTop = '6em'
            pintar(e)
            document.getElementById('todos').setAttribute('disabled', '')
        })
    }
    contenedor.innerHTML = codeHtml
})


