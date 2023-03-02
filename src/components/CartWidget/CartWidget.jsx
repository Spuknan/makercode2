import React from "react";

export const CartWidget = ({ cantidad }) => {
   return (
      <div className="widgetContainer">
         <button>
            <i className="fa-solid fa-cart-shopping"></i>
         </button>
         <p>{cantidad}</p>
      </div>
   );
};