import NavBarMenu from "../components/NavBarMenu"
import Footer from "../components/Footer"
import {Tab ,Tabs } from 'react-bootstrap'
import TablaUsuarios from "../components/TablaUsuarios"
import FormMenu from "../components/FormMenu"
import TablaMenu from "../components/TablaMenu"
import PedidosPendientes from "../components/PedidosPendientes"



const Admin = () => {


  return (
      <div className='Admin'>
      <NavBarMenu/>
    
    <div className="container-fluid">
      <Tabs
      defaultActiveKey="Usuario"
      className="mb-3"
      fill
    >
      <Tab eventKey="Usuario" title="Usuario">
        <TablaUsuarios/>
      </Tab>
      <Tab eventKey="Alta-Menu" title="Alta Menu">
       <FormMenu/>
      </Tab>
      <Tab eventKey="Tabla-Menu" title="Tabla Menu">
        <TablaMenu/>
      </Tab>
      <Tab eventKey="pedidos" title="Pedidos Pendientes">
        <PedidosPendientes/>
      </Tab>
    </Tabs>

    </div>
      <div className='Footer container-fluid'>
      <Footer className='container-fluid'/>
      </div>
      </div>
  )
}

export default Admin