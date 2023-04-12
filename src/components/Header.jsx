import React from 'react'
import { Link } from 'react-router-dom'
import{HashLink} from"react-router-hash-link"

const Header = () => {
  return (
    <nav>
        <h1>Deceit</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contacts</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <a href='#brands'>Brands</a>
            <Link to={"/services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header
