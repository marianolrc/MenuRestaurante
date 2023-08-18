import NavBarMenu from "../components/NavBarMenu"
import Footer from "../components/Footer"

const Admin = () => {
  return (
      <div className='Admin'>
      <NavBarMenu/>
    
      <div className="container">
        <div className="usuario">
          <div className="alta-usuario">


            </div>  
            <div className="inhabilitar-usuario">


            </div>
      </div>
      <div className="menus">

        <div className="alta-menus">


        </div>
        <div className="modif-menus">


        </div>
        <div className="baja-menus"></div>
      </div>
      <div className="pedidos">
        <div className="modif-pedidos">
          
        </div>
      </div>
      </div>
      <div className='Footer'>
      <Footer/>
      </div>
      </div>
  )
}

export default Admin