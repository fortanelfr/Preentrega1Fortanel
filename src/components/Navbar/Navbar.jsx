import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'


const Narbar = () => {
  return (
    <header>
        <h1>Tienda <br />
            Prueba</h1>
        <nav>
            <ul>
                 <li>Pagina 1</li>
                 <li>Pagina 2</li>
                 <li>Pagina 3</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default Narbar