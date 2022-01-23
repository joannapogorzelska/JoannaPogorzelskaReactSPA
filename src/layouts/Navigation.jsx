import React from "react"
import { NavLink } from 'react-router-dom'

import "../style/navigation.css"

const list = [
    { name: "start", path:"/", exact:true},
    { name: "o mnie", path:"/about"},
    { name: "Aktualności", path:"/news"},
    { name: "Kontakt", path:"/contact"},
    { name: "Admin", path:"/admin"}
]
function Navigation() {

    const menu = list.map(item => (
        <li key={item.name}><NavLink to={item.path} >{item.name}</NavLink></li>
    ))
    return (
    <nav className="navigation">
        <ul> {menu}</ul>
    </nav>
        )
}
export default Navigation