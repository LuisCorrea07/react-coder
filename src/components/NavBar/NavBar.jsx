import React from "react";
import CartWidget from "./CartWidget/CartWidget";

function NavBar() {
  const categories = ["Ropa", "Calzado", "Accesorios", "Ofertas"];

  return (
    <nav>
      <div className="brand">
        <h1>Mi Tienda</h1>
      </div>
      <ul className="categories">
        {categories.map((category, index) => (
          <li key={index}>
            <a href={`/${category.toLowerCase()}`}>{category}</a>
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
