import React, { useContext } from 'react'
import { CartItem } from './CartItem'
import { CartContext } from '../context/CartContext'
import { OrderForm } from './OrderForm'
import { Link } from "react-router-dom"


export const Cart = () => {

   const { carrito, total } = useContext(CartContext)

   return (
      carrito.length === 0 ?
         <div className='cartMensaje'>
            <p className='mensaje'>El carrito esta vacío!</p>
            <div className="ctaTienda">
               <Link to={`/productos`}>Ver Tienda</Link>
            </div>
         </div>
         :
         <div className='cart'>
            <div className='cartContainer'>
               <div className='cartItemContainer'>
                  {carrito.map(producto => <CartItem key={producto.id} producto={producto} />)}
               </div>
            </div>
            <div className='totalContainer'>
               <p className='totalTitulo'>Total</p>
               <p className='total'>${total()}</p>
            </div>
            <OrderForm />
         </div>
   )
}