import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-sm navbar-dark">
         <div className="container-fluid">
            <Link to={`/`} className="navbar-brand">MakerCode</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
               aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse container-fluid" id="collapsibleNavId">
               <form className="d-flex">
                  <input className="form-control" type="text" />
                  <button className="my-2 my-sm-0" type="submit">
                     <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
               </form>
               <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                     <Link to={`/`} className="nav-link active">Inicio</Link>
                  </li>
                  <li className="nav-item">
                     <Link to={`/Nosotros`} className="nav-link">Nosotros</Link>
                  </li>
                  <li className="nav-item">
                     <Link to={`/MakerPlace`} className="nav-link">MakerPlace</Link>
                  </li>
                  <li className="nav-item">
                     <Link to={`/Tienda`} className="nav-link">Tienda</Link>
                  </li>
                  <li className="nav-item">
                     <Link to={`/Carrito`} className="nav-link">
                        <i className="fa-solid fa-cart-shopping"></i>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}

export default Navbar