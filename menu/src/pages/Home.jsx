import React from 'react'
import NavBarMenu from '../components/NavBarMenu.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
          <NavBarMenu/>
         
    <div className="container">
    <div className="row">
        <div className="col">
            <h1>Home</h1>
        </div>
    </div>
  </div>
  <Footer/>
    </div>
  )
}

export default Home