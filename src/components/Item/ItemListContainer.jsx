import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Item } from './Item'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { Loader } from '../Loader/Loader'
import { Link } from "react-router-dom"


export const ItemListContainer = () => {

   const { categoria, subcategoria } = useParams()
   const [productos, setProductos] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {

      const dataBase = getFirestore()
      const dbCollection = collection(dataBase, 'items')

      if (subcategoria) {
         const productosSubCategoria = query(dbCollection, where('subcategoria', '==', subcategoria))
         getDocs(productosSubCategoria)
            .then(res => {
               if (res.docs.length) {
                  setProductos(res.docs.map(item => ({ id: item.id, ...item.data() })))
                  setLoading(false)
               } else {
                  setProductos()
                  setLoading(false)
               }
            })
      } else if (categoria) {
         const productosPorCategoria = query(dbCollection, where('categoria', '==', categoria))
         getDocs(productosPorCategoria)
            .then(res => {
               if (res.docs.length) {
                  setProductos(res.docs.map(item => ({ id: item.id, ...item.data() })))
                  setLoading(false)
               } else {
                  setProductos()
                  setLoading(false)
               }
            })
      } else {
         getDocs(dbCollection)
            .then(res => {
               if (res.docs.length) {
                  setProductos(res.docs.map(item => ({ id: item.id, ...item.data() })))
                  setLoading(false)
               }
            })
      }
   }, [categoria, subcategoria])

   return (
      loading ?
         <Loader loading={loading} />
         :
         productos ?
            <div className='itemList'>
               {productos.map(producto => (
                  <Item key={producto.id} id={producto.id} name={producto.nombre} price={producto.precio} img={producto.img} categoria={producto.categoria} subcategoria={producto.subcategoria}/>
               ))}
            </div>
            :

            <div className='messageContainer'>
               <h2 className='mensaje'>No existen productos con esta categoría!</h2>
               <p>Pero podes visitar nuestro catalogo completo</p>
               <div className="ctaTienda">
                  <Link to={`/productos`}>Ver Tienda</Link>
               </div>
            </div>
   )
}
