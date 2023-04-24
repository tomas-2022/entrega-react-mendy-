import { getUnProducto } from "../../asyncmock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useSearchParams } from "react-router-dom"; //useParams


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useSearchParams();

    useEffect( ()=> {
        getUnProducto(idItem)
        .then(res => setProducto(res))
    },[idItem])
  return (
    <div>
        <ItemDetail {...producto} />

    </div>
  )
}

export default ItemDetailContainer