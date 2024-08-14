//Crear clase producto con propiedades como nombre, precio y cantidad
//Crear clase carrito que pueda agregar, eliminar y modificar productos
//Metodo para aplicar descuentos a productos especificos
//Metodo para resumen de la compra

class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.descuento=0;
    }
}

class Carrito{
    constructor(){
        this.carrito=[];
    }
    agregarProducto(producto){
        let productoExistente = this.carrito.find(p => p.nombre.toLowerCase() === producto.nombre.toLowerCase());
        if (productoExistente) {
            console.log(`El producto ${producto.nombre} ya existe en el carrito.`);
        } else {
            this.carrito.push(producto);
            console.log(`Producto ${producto.nombre} agregado al carrito.`);
        }    
    }
    eliminarProducto(nombre){
        let productoExistente = this.carrito.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
        if (productoExistente) {
            this.carrito=this.carrito.filter(p=>p.nombre.toLowerCase()!=nombre.toLowerCase());
            console.log(`El producto ${nombre} ha sido eliminado del carrito.`);
        } else {
            console.log(`Producto ${nombre} no existe en el carrito.`);
        }    
    }
    modificarCantidad(nombre, nuevaCantidad){
        let productoExistente = this.carrito.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
        if (productoExistente) {
            this.carrito=this.carrito.map(p=>p.nombre.toLowerCase()===nombre.toLowerCase()? {...p, cantidad:nuevaCantidad}:p);
            console.log(`La cantidad del producto ${nombre} ha sido modificada a ${nuevaCantidad} en el carrito.`);
        } else {
            console.log(`Producto ${nombre} no existe en el carrito.`);
        } 
    }
    aplicarDescuento(nombre, descuento){
        let productoExistente = this.carrito.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
        if (productoExistente) {
            this.carrito=this.carrito.map(p=>p.nombre.toLowerCase()===nombre.toLowerCase()? {...p, descuento:descuento}:p);
            console.log(`Se ha aplicado el descuento al producto ${nombre}.`);
        } else {
            console.log(`Producto ${nombre} no existe en el carrito.`);
        } 
    }
    resumenCompra() {
        let total = 0;
        
        this.carrito.forEach(producto => {
            let subtotal = producto.precio * producto.cantidad * (1 - producto.descuento);
            total += subtotal;
            console.log(`Nombre: ${producto.nombre}`);
            console.log(`Precio: $${producto.precio.toFixed(2)}`);
            console.log(`Cantidad: ${producto.cantidad}`);
            if (producto.descuento > 0) {
                console.log(`Descuento: ${producto.descuento*100}%`)
            }
            console.log(`Subtotal: $${subtotal.toFixed(2)}`);
            console.log('-------------------------');
        });
        
        console.log(`El resumen de la compra es: $${total.toFixed(2)}`);
    }

}

// Crear productos
let producto1 = new Producto('Manzana', 1.00, 5);
let producto2 = new Producto('Banana', 0.50, 10);
let producto3 = new Producto('Naranja', 0.75, 8);

// Crear el carrito
let carrito = new Carrito();

// Agregar productos al carrito
carrito.agregarProducto(producto1); // Manzana
carrito.agregarProducto(producto2); // Banana
carrito.agregarProducto(producto3); // Naranja

// Intentar agregar un producto que ya existe
carrito.agregarProducto(producto1); // Manzana (debería mostrar que ya existe)

// Modificar la cantidad de un producto
carrito.modificarCantidad('Banana', 15); // Debería actualizar la cantidad de Banana a 15

// Aplicar descuento a un producto
carrito.aplicarDescuento('Naranja', 0.20); // Aplicar un 20% de descuento a Naranja

// Eliminar un producto del carrito
carrito.eliminarProducto('ManzanA'); // Eliminar Manzana del carrito

// Intentar eliminar un producto que no existe
carrito.eliminarProducto('ManZana'); // Debería mostrar que no existe

// Mostrar el resumen de la compra
carrito.resumenCompra(); // Mostrar el total con los productos actuales
