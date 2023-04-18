import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, reprehenderit sit perspiciatis nam maxime modi fugiat nesciunt cum provident ut mollitia nihil labore soluta esse suscipit repudiandae, harum alias eveniet.</p>
        <img src={img} alt= {nombre} />
    </div>
)
}

export default ItemDetail