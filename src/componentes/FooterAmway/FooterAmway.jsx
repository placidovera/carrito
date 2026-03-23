

const FooterAmway = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row align-items-center">
          {/* Texto motivador */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h4 className="fw-bold">¡Forma parte de nuestro equipo Amway!</h4>
            <p className="lead">
              Descubre oportunidades únicas, crecimiento personal y profesional,
              y una comunidad que te acompaña en cada paso.
            </p>
           <a
  href="https://wa.me/543434577393?text=¡Hola!%20Quiero%20unirme%20al%20equipo%20Amway"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-warning btn-lg text-dark fw-bold"
>
  Únete Ahora
</a>
          </div>

          {/* Imagen o ilustración */}
       <div className="col-md-6 text-center">
  {/* <img 
    src="./imagenes/logo.jpg" 
    alt="Corazón Amway" 
    className="img-fluid" 
    style={{ maxHeight: '150px' }}
  /> */}
</div>
        </div>

        <hr className="my-4 border-light" />

        {/* Información de contacto y redes */}
        <div className="d-flex justify-content-between flex-column flex-md-row align-items-center">
          <p className="mb-2 mb-md-0">&copy; {new Date().getFullYear()} Amway. Todos los derechos reservados.</p>
          <div>
            <a href="https://www.facebook.com/amway" className="text-white me-3">
              <i className="bi bi-facebook fs-4"></i>
            </a>
            <a href="https://www.instagram.com/amway" className="text-white me-3">
              <i className="bi bi-instagram fs-4"></i>
            </a>
            <a href="https://www.linkedin.com/company/amway" className="text-white">
              <i className="bi bi-linkedin fs-4"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAmway;