const productos = [
    {nombre: "Tanza", precio: 1500, id: "1", img: "./fotos/foto-01.jpg", idCat:"1"},
    {nombre: "Taladro", precio: 5500, id: "2", img: "./fotos/foto-02.jpg", idCat:"2"},
    {nombre: "Cinta metrica", precio: 800, id: "3", img: "./fotos/foto-03.jpg", idCat:"3"},
    {nombre: "Desmalezadora", precio: 12000, id: "4", img: "./fotos/foto-04.jpg", idCat:"1"},

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

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve =>{
        setTimeout (() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        },100)
    })

}
