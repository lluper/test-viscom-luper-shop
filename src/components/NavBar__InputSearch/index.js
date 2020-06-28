import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <div className="inputSearch">
            <input type="text"  className="inputSearch__input" placeholder="Buscar produtos,marcas e muito mais" />
            <Link to="/search"className="inputSearch_button">Search</Link>
        </div>
    )
}
