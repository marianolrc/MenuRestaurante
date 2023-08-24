import React from 'react';
import Button from 'react-bootstrap/Button';
import buttonsMenuComidas from "./buttonsMenuComidas.css";

function ButtonsMenuComidas() {
  return (
    <div className='container text-center divButtons '>
        <Button className='m-2 buttonOptions' variant="success">Pastas</Button>
        <Button className='m-2 buttonOptions' variant="success">Carnes</Button>
        <Button className='m-2 buttonOptions' variant="success">Sandwiches</Button>
        <Button className='m-2 buttonOptions' variant="success">Pizzas</Button>
        <Button className='m-2 buttonOptions' variant="success">Ensaladas</Button>
        <Button className='m-2 buttonOptions' variant="success">Salsas</Button>
        <Button className='m-2 buttonOptions' variant="success">Guarniciones</Button>
    </div>
  );
}

export default ButtonsMenuComidas;
