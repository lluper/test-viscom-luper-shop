import React from 'react'
import './index.css'

export default function index() {
    return (
        <div className="inputSearch">
            <input type="text"  className="inputSearch__input" placeholder="Buscar produtos,marcas e muito mais" />
            <button className="inputSearch_button">Search</button>
        </div>
    )
}
