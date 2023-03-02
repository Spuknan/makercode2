import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data'
import { Item } from './Item'

export const ItemListContainer = () => {
   const { categoria, subcategoria } = useParams()
   const [productos, setProductos] = useState([])

   useEffect(() => {
      setProductos()
      const productosPorCategoria = new Promise((resolve, reject) => {
         setTimeout(() => {
            if (data.length) {
               resolve(data.filter(producto => producto.categoria === categoria))
            } else {
               reject("No hay productos para mostrar")
            }
         }, 2000)
      })

      const productosSubCategoria = new Promise((resolve, reject) => {
         setTimeout(() => {
            if (data.length) {
               resolve(data.filter(producto => producto.subcategoria === subcategoria))
            } else {
               reject("No hay productos para mostrar")
            }
         }, 2000)
      })

      if (subcategoria) {
         productosSubCategoria
            .then(res => {
               setProductos(res)
            })
      } else if (categoria) {
         productosPorCategoria
            .then(res => {
               setProductos(res)
            })
      } else {
         setProductos(data)
      }
   }, [categoria, subcategoria])

   return (
      productos ?
         <div className="ItemListWrapper">
            <div className='ItemListContainer container'>
               {productos.map(producto => (
                  <Item key={producto.id} id={producto.id} nombre={producto.nombre} precio={producto.precio} img={producto.img} />
               ))}
            </div>
         </div>

         :

         <div className='detailContainer'>
            <h2 className='mensaje'>Cargando...</h2>
         </div>
   )
}