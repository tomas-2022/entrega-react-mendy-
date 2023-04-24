import './ItemListcontainer.css'
import { getProducts, getProductosPorCategoria} from '../../asyncmock'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [productos, setProducts] = useState([])

    const {idCategoria} = useParams();
    useEffect( () => {

        const funcionProductos = idCategoria ? getProductosPorCategoria : getProducts ;

        funcionProductos(idCategoria)
        .then(response => setProducts(response))
        .catch(error => console.log("error"))
    }, [idCategoria])
    
    return (
        <div>
            <h4 className='subtitulo'>{greeting}</h4>
            <h2>Productos</h2>
            <ItemList productos={productos}/>

        </div>
    )
}

export default ItemListContainer