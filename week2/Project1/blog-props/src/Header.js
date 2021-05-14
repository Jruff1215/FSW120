import React from "react"
import Nav from "./Navbar"

function Header() {
return(
    <div className = "head">
        <Nav />
        <h1 className = "title">Clean Blog</h1>
        <p className = "theme">A Blog Theme by Start Bootstrap</p>
    </div>
)
}
export default Header