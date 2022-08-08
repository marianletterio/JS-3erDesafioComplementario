class Prendas { 
    constructor(nombre,precio,talle){
    this.nombre = nombre;
    this.precio = precio;
    this.talle = talle;
}

    mostrarTodo(){
        return this.nombre + " $ "+ this.precio ; 
    }
    mostrarPrecios(){
        return "$" + this.precio;
    }
    mostrarTalles(){
        return this.nombre + ": " + this.talle;
    }
}

const prendas = [];
prendas.push(new Prendas ("Buzo Eyes", 6900 , "S - M - L" ));
prendas.push(new Prendas ("Campera Dogs", 14900 , "S - M - L" ));
prendas.push(new Prendas("Remera Jungle", 3900 , "S - M - L" ));
prendas.push(new Prendas("Camisa Daisy", 800 , "S - M - L" ));
prendas.push(new Prendas ("Sweater Lazy", 12900 , "S - M - L" ));
prendas.push(new Prendas("Camisa Patchwork", 10900 , "S - M - L" ));

const buscarCampera = (camperaDogs) => {
    return camperaDogs.nombre === "Campera Dogs";
}

console.log(prendas.find(buscarCampera));