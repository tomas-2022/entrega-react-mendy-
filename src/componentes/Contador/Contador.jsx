import { useState } from 'react';


const Contador = ({stock, inicial}) => {
  const [contador, setContador] = useState(inicial);

  const aumentarCarrito = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }

  const disminuirCarrito = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  }

  const agregar = () => {
    console.log(`agregar ${contador} items`)
  }

  return (
    <div>
      <h3>Contador</h3>
      <button onClick={aumentarCarrito} > + </button>
      <strong> {contador} </strong> 
      <button onClick={disminuirCarrito} > - </button>
      <button onClick={agregar}>Agregar al carrito</button>
    </div>
  )
}

export default Contador