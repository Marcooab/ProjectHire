import { Link } from "react-router-dom"
import { Nav, Ulist } from "./style";

const NavBar = () => {
  return(
    <Nav>
      <Ulist>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/usestate">useState</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </Ulist>
    </Nav>
  )
}

export default NavBar;