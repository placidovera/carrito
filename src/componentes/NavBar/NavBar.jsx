import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          {/* Logo o nombre */}
          <Link to="/" className="navbar-brand text-fluor fw-bold">
            Amway
          </Link>

          {/* Botón hamburguesa */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú colapsable */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <NavLink to="/categoria/Hogar" className="text-fluor">
                  Hogar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/Suplementos Nutricionales" className="text-fluor">
                  Suplementos Nutricionales
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/Cuidado Oral" className="text-fluor">
                  Cuidado Oral
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/Cuidado Corporal" className="text-fluor">
                  Cuidado Corporal
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/Cuidado del Cabello" className="text-fluor">
                  Cuidado del Cabello
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/Cuidado de la Piel" className="text-fluor">
                  Cuidado de la Piel
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/categoria/Promos" className="text-fluor">
                  Promos
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Carrito */}
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;