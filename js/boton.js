btN1= document.getElementById("btn-1");
btN1.addEventListener("click",function(){
    alert("Maria")
    })
btN2= document.getElementById("btn-2");
btN2.addEventListener("click",function(){
    alert("Pedro")
    })    
      
btN4= document.getElementById("btn-4");
btN4.addEventListener("click",function(){
    alert("Duban")
})
btN5= document.getElementById("btn-5");
btN5.addEventListener("click",function(){
    alert("Francia")
})
btN6= document.getElementById("btn-6");
btN6.addEventListener("click",function(){
    alert("Juan")
})
nombre = document.getElementById("nombre");
nombre.addEventListener("mouseover", function(){
    alert("Ingresar")
})
     

btN2.addEventListener("click",imprimir);
function imprimir(){
    alert("pedro");
}
btN3= document.getElementById("btn-3");
btN3.addEventListener("click", mostrarTexto);
function mostrarTexto(){
    alert(nombre.value);
}


  