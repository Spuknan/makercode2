import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ItemCount } from '../Item/ItemCount'

export const CartItem = ({ producto }) => {

   const { borrarDelCarrito, actualizarCantidad } = useContext(CartContext)

   const contadorActualizarCantidad = (cantidad) => {
      actualizarCantidad(producto.id, cantidad)
   }

   return (
      <div className='cartItem'>
         <div className='cartItemImg'>
            <img src={producto.img} alt={producto.nombre} />
         </div>
         <div className="itemContent">
            <div className='itemData'>
               <p>{producto.nombre}</p>
               <p>${producto.precio}</p>
            </div>
            <div className="bottom">
               <div className='stockContainer'>
                  <ItemCount initial={producto.quantity} stock={producto.stock} onCantidad={contadorActualizarCantidad} />
                  <p className='stock'>En stock: {producto.stock} </p>
               </div>
               <p>Subtotal: ${parseInt(producto.quantity * producto.precio)}</p>
               <button className='restaTodo' onClick={() => borrarDelCarrito(producto.id)}>Borrar producto</button>
            </div>
         </div>
      </div>
   )
}