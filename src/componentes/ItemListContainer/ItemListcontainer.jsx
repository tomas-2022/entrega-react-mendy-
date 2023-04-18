import './ItemListcontainer.css'
import { getProducts } from '../../asyncmock'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [productos, setProducts] = useState([])

    useEffect( () => {
        getProducts()
        .then(response => setProducts(response))
        .catch(error => console.log("error"))
    }, [])
    return (
        <div>
            <h4 className='subtitulo'>{greeting}</h4>
            <h2>Productos</h2>
            <ItemList productos={productos}/>

        </div>
    )
}

export default ItemListContainer