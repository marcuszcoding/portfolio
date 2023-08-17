import React from 'react'
import "./home.css"
import Social from './Social'

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid"></div>
        <div className="home-content grid">
            <Social />
        </div>
    </section>
  )
}

export default Home