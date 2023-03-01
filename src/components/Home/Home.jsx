import React from 'react'

const Home = () => {
   return (
      <div className="Home">
         <div className="row container">
            <div className="col left">
               <img src="./img/makerHead.png" alt="" className='img-fluid' />
            </div>
            <div className="col right">
               <h1 className='text-center text-sm-start'>LA TECNOLOGÍA <span>4.0</span> LLEGÓ PARA <span>QUEDARSE</span></h1>
               <p className='text-center text-sm-start'>Conocé sobre impresión 3D, corte láser, ploteo de vinilos y encontrá los mejores productos para sumarte a la nueva ola de fabricación.</p>
            </div>
         </div>
      </div>
   )
}

export default Home