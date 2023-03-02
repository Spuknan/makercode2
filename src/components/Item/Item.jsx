import React from 'react'
import { Link } from 'react-router-dom'


export const Item = ({id, img, nombre, precio}) => {
   return (
      <div className='ItemContainer'>
         <div className='Img'>
            <img src={require(`../../../public/img/productos/${img}`)} alt={nombre} className='img-fluid' />
         </div>
         <div className="itemDetails">
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <Link className='detalles' to={`/producto/${id}`}>
               Ver detalles
            </Link>
         </div>
      </div>
   )
}