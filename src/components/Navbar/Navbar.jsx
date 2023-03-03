import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-sm navbar-dark">
         <div className="container">
            <Link to={`/`} className="navbar-brand">MakerCode</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
               aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse container-fluid" id="collapsibleNavId">
               <form className="d-flex">
                  <input className="form-control" type="text" />
                  <button className="my-2 my-sm-0" type="submit">
                     <i className="fa-solid fa-magnifying-glass"></i>
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
                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tienda
                     </a>
                     <ul className="dropdown-menu">

                        <Link to={`/productos`} className="dropdown-item">Todos</Link>

                        <Link to={`/productos/impresion3d`} className="dropdown-item">Impresion 3D</Link>

                        <Link to={`/productos/cortelaser`} className="dropdown-item">Corte laser</Link>

                        <Link to={`/productos/vinilos`} className="dropdown-item">Vinilos</Link>

                     </ul>
                  </li>
                  <li className="nav-item">
                     <Link to={`/Carrito`} className="nav-link">
                        <CartWidget cantidad={10} />
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}

export default Navbar