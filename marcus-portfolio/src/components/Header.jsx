import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">Marcus</a>
        <div className="nav-menu">
          <ul className="nav-list grid"></ul>
        </div>
      </nav>
    </header>
  )
}

export default Header