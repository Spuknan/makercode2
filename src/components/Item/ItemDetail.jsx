import React, { useState, useEffect, useContext } from 'react'
import { ItemCount } from './ItemCount'
import { Link, useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { Loader } from '../Loader/Loader'
import { CartContext } from '../context/CartContext'


export const ItemDetail = () => {

   const { agregarCarrito, chequearCarrito } = useContext(CartContext)

   const { productoId } = useParams()
   const [producto, setProducto] = useState()
   const [agregado, setAgregado] = useState(false)
   const [loading, setLoading] = useState(true)

   useEffect(() => {

      setAgregado(false)
      const dataBase = getFirestore()
      const itemDb = doc(dataBase, 'items', productoId)
      getDoc(itemDb)
         .then(res => {
            if (res.data()) {
               setProducto({ id: res.id, ...res.data() })
               setLoading(false)
               chequearCarrito(productoId) && setAgregado(true)
            } else {
               setProducto()
               setLoading(false)
            }
         })

      window.scrollTo(0, 100)

   }, [productoId])

   const onAdd = (cantidadSeleccionada) => {
      setAgregado(true)
      agregarCarrito(producto, cantidadSeleccionada)
   }


   return (
      loading ?
         <Loader loading={loading} />
         :
         producto ?
            <>
               <div key={producto.id} className='detailContainer'>
                  <div className="itemCard">
                     <div className='detailFoto'>
                        <img src={producto.img} alt={producto.nombre} />
                     </div>
                     <div className='detailProducto'>
                        <h2 className='detailTitulo'>{producto.nombre}</h2>
                        <p className='detailDescripcion'>{producto.descripcion}</p>
                        {
                           !agregado ?
                              <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} agregar={true} />
                              :
                              <div className='continuarContainer'>
                                 <p>Producto agregado al carrito!</p>
                                 <div className='botonBolsa'>
                                    <Link to={`/carrito`}>Ver carrito</Link>
                                 </div>
                                 <div className='botonSeguir'>
                                    <Link to={`/productos`}>Seguir comprando</Link>
                                 </div>
                              </div>
                        }
                        <h3 className='detailPrecio'>${producto.precio}</h3>
                        <p className='stock'>En stock: {producto.stock} </p>
                     </div>
                  </div>
               </div>
            </>
            :

            <div className='messageContainer'>
               <h2 className='mensaje'>Lo sentimos, no encontramos el productos que buscas</h2>
            </div>
   )
}
