import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">Marcus</a>
        <div className="nav-menu">
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="uil uil- nav-icon"></i>
              </a>
            </li>

            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="uil uil- nav-icon"></i>
              </a>
            </li>

            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="uil uil- nav-icon"></i>
              </a>
            </li>

            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="uil uil- nav-icon"></i>
              </a>
            </li>
            
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="uil uil- nav-icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header