const productos = [
    {nombre: "Tanza", precio: 1500, id: 1, img: "./fotos/foto-01.jpg"},
    {nombre: "Taladro", precio: 5500, id: 2, img: "./fotos/foto-02.jpg"},
    {nombre: "Cinta metrica", precio: 800, id: 3, img: "./fotos/foto-03.jpg"},
    {nombre: "Desmalezadora", precio: 12000, id: 4, img: "./fotos/foto-04.jpg"},

]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(productos);
        }, 2000) //son 2 segundos
    })
}

//funcion para un solo producto
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
} 
