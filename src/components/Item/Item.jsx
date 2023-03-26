import React from 'react'
import { Link } from 'react-router-dom'



export const Item = ({ id, img, name, price, categoria, subcategoria }) => {

   return (
      <div className='productCard card'>
         <div className='cardFoto'>
            <img src={img} alt={name} />
         </div>
         <div className="detail">
            <div className="nameCategory">
               <p className="name">{name}</p>
               <div className="cat">
                  <p className="categoria">{categoria}</p>
                  <p className="subcategoria">{subcategoria}</p>
               </div>
            </div>
            <p className="price">${price}</p>
            <Link className='detalles' to={`/producto/${id}`}>
               Ver detalles
            </Link>
         </div>
      </div>
   )
}