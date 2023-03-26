import React from 'react'
import { ItemDetail } from '../Item/ItemDetail'
import { ItemListContainer } from '../Item/ItemListContainer'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Home/Home';
import { Cart } from '../Carrito/Carrito';
import MakerPlace from '../MakerPlace/MakerPlace';
import Nosotros from '../Nosotros/Nosotros';

export const Main = () => {
   return (
      <main>
         <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/producto/:productoId' element={<ItemDetail />} />
            <Route exact path='/nosotros' element={<Nosotros />} />
            <Route exact path='/makerplace' element={<MakerPlace />} />
            <Route exact path='/productos' element={<ItemListContainer />} />
            <Route exact path='/productos/:categoria' element={<ItemListContainer />} />
            <Route exact path='/productos/:categoria/:subcategoria' element={<ItemListContainer />} />
            <Route exact path='/carrito' element={<Cart />} />
            <Route path='*' element={<Navigate to='/404' />} />
         </Routes>
      </main>
   )
}
