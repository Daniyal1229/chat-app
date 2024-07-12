import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
        <h1> <span>C</span>hat <span>A</span>pp</h1>
        <div className="links">
          <NavLink to="register">Register</NavLink>
          <NavLink to="login">Login</NavLink>
        </div>
    </nav>
  )
}
