let respuesta = prompt("Seleccione la opción deseada: \n 1) Ver todas las prendas disponibles \n 2) Ver los precios \n 3) Ver talles disponibles")


if (respuesta == "1"){
    alert("Nuestras prendas disponibles son:" + mostrarPrendas());
    let confirmar = prompt("Deseas comprar algo? \n 1) Si 2) No");

    if(confirmar == "1"){
    let numeroPrendas = parseInt(prompt("¿Cuántas prendas querés comprar?"));
    let contador = 1;
    let totalPrendas = 0;

    while (contador <= numeroPrendas){
    prenda = prompt("Ingresá el número indicando la prenda seleccionada: \n 1) Buzo Eyes \n 2) Campera Dogs \n 3) Remera Jungle \n 4) Camisa Daisy \n 5) Sweater Lazy \n 6) Camisa Patchwork");
    totalPrendas = totalPrendas + prenda;
    contador++;
    elegirPrenda();
    }
    alert("Gracias por comprar en nuestra tienda! Pronto estarás recibiendo un correo con los detalles del envío.");

}

else if(confirmar == "2"){
    alert("Gracias por visitarnos!")
}
}else if (respuesta == "2"){
    alert("Quiero saber el precio de todos los productos: " + mostrarSoloPrecios())
}else if(respuesta == "3"){
    alert("Los talles actuales son: " + mostrarTalles())
}

function elegirPrenda(){
    if(prenda == "1"){
        alert("Compraste el Buzo Eyes!");
        let precioBuzoEyes = document.getElementById("precioBuzoEyes");
        precioBuzoEyes.innerHTML='EN EL CARRITO';
    }else if(prenda == "2"){
        alert("Compraste la Campera Dogs!");
        let precioCamperaDogs = document.getElementById("precioCamperaDogs");
        precioCamperaDogs.innerHTML='EN EL CARRITO';
    }else if(prenda == "3"){
        alert("Compraste la Remera Jungle!");
        let precioRemeraJungle = document.getElementById("precioRemeraJungle");
        precioRemeraJungle.innerHTML='EN EL CARRITO';
    }else if(prenda == "4"){
        alert("Compraste la Camisa Daisy!");
        let precioCamisaDaisy = document.getElementById("precioCamisaDaisy");
        precioCamisaDaisy.innerHTML='EN EL CARRITO';
    }else if(prenda == "5"){
        alert("Compraste el Sweater Lazy!");
        let precioSweaterLazy = document.getElementById("precioSweaterLazy");
        precioSweaterLazy.innerHTML='EN EL CARRITO';
    }else if(prenda == "6"){
        alert("Compraste la Camisa Patchwork!");
        let precioCamisaPatchwork = document.getElementById("precioCamisaPatchwork");
        precioCamisaPatchwork.innerHTML='EN EL CARRITO';
    }
}

function mostrarPrendas(){
let stock = "";
for(let i = 0; i < prendas.length 
    ;i++){
    stock += "\n"+prendas[i].mostrarTodo();
}
return stock ; 
} 

function mostrarSoloPrecios(){
    let precios = "";
    for (let i = 0; i <prendas.length;i++){
        precios += "\n"+prendas[i].mostrarPrecios();
    }
return precios;
}

function mostrarTalles(){
    let talle = "";
    for (let i = 0; i < prendas.length;i++){
        talle += "\n" + prendas[i].mostrarTalles();
    }
    return talle;
}
s