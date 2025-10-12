import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <strong>
            <Link to="/" className="text-fluor">
            CARRITO
            </Link>
          </strong>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <NavLink to="/categoria/promos" className="text-fluor">
                  Promos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/cosmeticos" className="text-fluor">
                Cosmeticos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/latas" className="text-fluor">
                  Maquillajes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/combos" className="text-fluor">
                  Cremas
                </NavLink>
                 </li>
            </ul>
          </div>
        </div>
        <CartWidget/>
      </nav>
    </header>
  );
};

export default NavBar;
