
let productos=[{
    objeto:'celular',
    img:'img/1.png',
    modelo: 'Note 8 pro',
    marca: 'Huawei',
    precio: '$345.00',
    año:'2020'
},{
    objeto:'celular',
    img:'img/1.png',
    modelo: 'Note 1 pro',
    marca: 'Huawei',
    precio: '$321.00',
    año:'2020'
},{
    objeto:'celular',
    img:'img/1.png',
    modelo: 'Note 2 pro',
    marca: 'Huawei',
    precio: '$324.00',
    año:'2020'
},{
    objeto:'celular',
    img:'img/1.png',
    modelo: 'A10 pro',
    marca: 'Samsung',
    precio: '$300.00',
    año:'2020'

},{
    objeto:'celular',
    img:'img/1.png',
    modelo: 'A11 pro',
    marca: 'Samsung',
    precio: '$320.00',
    año:'2021'
},{
    objeto:'celular',
    img:'img/1.png',
    modelo: 'A20 pro',
    marca: 'Samsung',
    precio: '$350.00',
    año:'2021'
},{
    objeto:'celular',
    img: 'img/2.png',
    modelo: 'A51 pro',
    marca: 'Samsung',
    precio: '$350.00',
    año:'2021'
    
},{
    objeto:'celular',
    img: 'img/2.png',
    modelo: 'A01 pro',
    marca: 'Samsung',
    precio: '$400.00',
    año:'2021'
},{
    objeto:'celular',
    img: 'img/2.png',
    modelo: '11 pro max',
    marca: 'Iphone',
    precio: '$800.00',
    año:'2021'

},{
    objeto:'celular',
    img: 'https://tienda.claro.com.ec/cdn/claroec/thumbnail/000000000070033529.png',
    modelo: 'Ultra mega ',
    marca: 'Huawei',
    precio: '$400.00',
    año:'2021'
},{
    objeto:'celular',
    img: 'https://tienda.claro.com.ec/cdn/claroec/thumbnail/000000000070033529.png',
    modelo: 'Redmi Note 9 Pro',
    marca: 'Xiaomi',
    precio: '$400.00',
    año:'2021'
},{
    objeto:'celular',
    img: 'https://tienda.claro.com.ec/cdn/claroec/thumbnail/000000000070033529.png',
    modelo: 'G19',
    marca: 'Motorola',
    precio: '$400.00',
    año:'2021'
},{
    objeto:'laptop',
    img: 'img/3.png',
    modelo: 'Dw031234',
    marca: 'HP',
    precio: '$500.00',
    año:'2018'
},{
    objeto:'impresora', 
    img: 'img/4.png',
    modelo: 'Epson 1604',
    marca: 'HP',
    precio: '$200.00',
    año:'2018'
},{
    objeto:'otro',
    img: 'img/5.png',
    modelo: 'HG8929',
    marca: 'Marvo',
    precio: '$45.00',
    año:'2020'
}];


let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;
document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
   if(semaforo){
       document.querySelectorAll(".hamburguer > i")[0].style.color="white";
       semaforo=false;
   }
   else{
       document.querySelectorAll(".hamburguer > i")[0].style.color="#ec1c25";
       semaforo=true;
   }
    enlacesHeader.classList.toggle("menudos")
})





let contenedor=document.querySelector('.grid-container')
let codeHtml=''


//document.getElementById('todos').style.display='none'

productos.forEach(e=>{
  
    let img=e.img;
    let modelo=e.modelo;
    let marca=e.marca;
    let precio=e.precio;
    let año=e.año;
    //console.log(img,modelo,marca,precio,año)
    codeHtml+=`<div class="producto__celulares" >
    <div class="producto__informacion" >
        <div class="producto__img" >
            <img src="${img}" alt="">
        </div>
        <div class="producto__info" >
            <h3>${marca} ${modelo}</h3>
            <a href="#" class="producto__boton">Más información</a>
        </div>
    </div>
</div>`;
})

contenedor.innerHTML=codeHtml
    


let texto=document.getElementById('texto')
texto.style.display='none'
texto.addEventListener('click',(e)=>{
    texto.style.border='2px solid silver'
})

/*texto.addEventListener('keypress',(e)=>{
    if(e.keyCode==13){
        codeHtml=''
        filtrar()
    }


})*/



texto.addEventListener('input',(e)=>{
    console.log(texto.value)
    codeHtml=''
    filtrar()


})

const filtrar=()=>{
    let textoIngresado=texto.value.toLowerCase()
    
    productos.forEach(e=>{
        let marca=e.marca.toLocaleLowerCase();
        let modelo=e.modelo.toLocaleLowerCase()
      
        if(marca.indexOf(textoIngresado) !==-1 ){
           
          pintar(e)
    
    }else if(modelo.indexOf(textoIngresado) !==-1){
            
          pintar(e)
   
    }
    
    })
    
    if(codeHtml==''){
        console.log('no hay elemtno')
        noEncuentraProducto()
    }
    contenedor.innerHTML=codeHtml
    
}
const pintar=(e)=>{

    console.log('entraste a la funcion papu')
    codeHtml+=`<div class="producto__celulares">
        <div class="producto__informacion">
        <div class="producto__img">
            <img src="${e.img}" alt="">
        </div>
         <div class="producto__info">
            <h3>${e.marca} ${e.modelo}</h3>
            <h3></h3>
            <a href="#" class="producto__boton">Más información</a>
        </div>
    </div>
</div>`;
    
}
const noEncuentraProducto=()=>{
    codeHtml=`<div class="elementos" >
                <h2>Poducto no encontrado</h2>
                  <img src="https://i.pinimg.com/564x/26/b8/84/26b8840bf90d9f66ebe9f48c458ff9d1.jpg" class="img-error">
                <h2>La pagina está sufriendo ansiedad, no existe tu busqueda</h2>
              </div>`; 

}
const filtrarCelulares=document.getElementById('celular')
const filtrarTodos=document.getElementById('todos')
const filtrarComputadores=document.getElementById('laptop')
const filtrarimpresorass=document.getElementById('impresora')
const cajaDeFiltrar=document.getElementById('cajafiltrar')

cajaDeFiltrar.addEventListener('click',(e)=>{
   
    //console.log(e)
    if(e.target.id=='laptop'){
        codeHtml=''
        filtrarPorDatos('laptop')
    }
    else if(e.target.id=='celular'){
        codeHtml=''
        filtrarPorDatos('celular')
    }else if(e.target.id=='impresora'){
        codeHtml=''
        filtrarPorDatos('impresora')
    }else if(e.target.id=='otros'){
        codeHtml=''
        filtrarPorDatos('otro')
    }else if(e.target.id=='todos'){
        codeHtml=''
        texto.style.display='initial'
        productos.forEach(e =>{
            
            pintar(e)
            document.getElementById('todos').setAttribute('disabled','')
        })
    }
    contenedor.innerHTML=codeHtml
})

function filtrarPorDatos(a){
    document.getElementById('todos').style.display='initial'
    texto.style.display='none'
    
    productos.forEach(e  =>{
        if(e.objeto==a){
            
            pintar(e)
           
            
    }
    contenedor.innerHTML=codeHtml
})

}

       
        
 
       

