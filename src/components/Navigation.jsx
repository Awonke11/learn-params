import {NavLink} from "react-router-dom"

const Navigation = () => {
  return (
    <div className="nav">
        <NavLink to='/' className="nav-link">
            <h1>Home</h1>
        </NavLink>
        <NavLink to='/about' className="nav-link">
            <h1>About</h1>
        </NavLink>
    </div>
  )
}

export default Navigation