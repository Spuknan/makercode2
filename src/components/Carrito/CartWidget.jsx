import React from "react";
import { Link } from "react-router-dom";

export const CartWidget = ({ cantidad }) => {
   return (
      <div className="CartWidget">
         <div className="iconoCarrito">
            <Link to={`carrito`}>
               <button>
                  <i className="fa-solid fa-cart-shopping"></i>
               </button>
            </Link>
         </div>
         <p className={cantidad ? '' : '0'}>{cantidad || "0"}</p>
      </div>
   );
};
