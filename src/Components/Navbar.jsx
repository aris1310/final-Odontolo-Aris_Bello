
import { Link } from "react-router-dom"
import style from "./Navbar.module.css"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const direcciones= [{route:"/", name:"Home"},
                      {route:"/contact", name:"Contact"},
                      {route:"/favs", name:"Favs"}]

  return (
    <div className={style.header}>

      <h2>DH Odonto</h2>
      <nav >
        {direcciones.map((direccion, index) => (
          <Link to={direccion.route} key={index} className={style.link}>
            {direccion.name}
          </Link>
        ))}
      </nav>
      <button>Change theme</button>
      
    </div>
  )
}

export default Navbar