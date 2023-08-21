import NavBarMenu from "../components/NavBarMenu"
import Footer from "../components/Footer"
import {Tab ,Tabs} from 'react-bootstrap'
import TablaUsuarios from "../components/TablaUsuarios"
import FormMenu from "../components/FormMenu"
const Admin = () => {
  return (
      <div className='Admin'>
      <NavBarMenu/>
    
      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="Usuario" title="Usuario">
        <TablaUsuarios/>
      </Tab>
      <Tab eventKey="Menues" title="Menues">
       <FormMenu/>
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
      <div className="container">

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