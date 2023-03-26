import React, { useState, useContext, useEffect } from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { CartContext } from '../context/CartContext'


export const OrderForm = () => {

   const { carrito, total, vaciarCarrito } = useContext(CartContext)
   const [clienteNombre, setClienteNombre] = useState('')
   const [clienteTelefono, setClienteTelefono] = useState('')
   const [clienteEmail, setClienteEmail] = useState('')
   const [clienteEmailConfirmado, setClienteEmailConfirmado] = useState('')
   const [compraRealizada, setCompraRealizada] = useState(false)
   const [disabled, setDisabled] = useState(true)
   const [ordenId, setOrdenId] = useState('')
   const dataBase = getFirestore();
   const ordenes = collection(dataBase, 'orders');


   const enviarCompra = (e) => {
      e.preventDefault();
      const orden = {
         buyer: {
            name: clienteNombre,
            phone: clienteTelefono,
            email: clienteEmail
         },
         items: carrito,
         total: total()
      };

      addDoc(ordenes, orden)
         .then((docRef) => {
            setCompraRealizada(true)
            setOrdenId(docRef.id)
            // Para simular el reseteo sin que haga falta recargar la pagina, despues de 7 segundos se vacia el array del carrito asi se puede volver a probar todas las funcionalidades
            setTimeout(() => {
               vaciarCarrito()
            }, 7000);
         })
   }

   const confirmarMail = () => {
      if (clienteEmail.length == 0) {
         setDisabled(true)
      } else {
         clienteEmail === clienteEmailConfirmado ? setDisabled(false) : setDisabled(true)
      }
   }

   useEffect(() => {

      confirmarMail()

   }, [clienteEmail, clienteEmailConfirmado])



   return (
      compraRealizada ?
         <div className='ordenMensaje'>
            <p className='gracias'>Gracias por su compra!</p>
            <p className='seguimiento'>Puede seguir su orden con el siguiente número: <br /><span className='numeroSeguimiento'>{ordenId}</span></p>
         </div>
         :

         <div className='ordenFormContainer'>
            <form className='ordenForm' onSubmit={enviarCompra}>
               <div className="labels">
                  <label>
                     Nombre:<br />
                     <input required type="text" value={clienteNombre} onChange={(e) => setClienteNombre(e.target.value)} />
                  </label>
                  <label>
                     Teléfono:<br />
                     <input required type="text" value={clienteTelefono} onChange={(e) => setClienteTelefono(e.target.value)} />
                  </label>
                  <label>
                     Email:<br />
                     <input required type="email" value={clienteEmail} onChange={(e) => setClienteEmail(e.target.value)} />
                  </label>
                  <label>
                     Confirmar Email:<br />
                     <input required type="email" value={clienteEmailConfirmado} onChange={(e) => setClienteEmailConfirmado(e.target.value)} />
                  </label>
               </div>
               {!disabled &&
                  <button className='ordenBoton' type="submit">Realizar compra</button>
               }
            </form>
         </div>
   )
}
