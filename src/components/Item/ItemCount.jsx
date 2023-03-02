import React, { useState } from 'react'

export const ItemCount = ({ stock }) => {

   const [cantidad, setCantidad] = useState(1)

   return (
      stock ?
         <div className='contadorContainer'>
            <div className='contador'>
               <button className='resta' onClick={() => cantidad > 1 ? setCantidad(cantidad - 1) : cantidad}>
                  -
               </button>
               <div>
                  {cantidad}
               </div>
               <button className='suma' onClick={() => cantidad < stock ? setCantidad(cantidad + 1) : cantidad}>
                  +
               </button>
            </div>
            <div>
               <button className='agregar'>Agregar</button>
            </div>
         </div>
         :
         <div className='agotado'>
            <p>Agotado</p>
         </div>
   )
}