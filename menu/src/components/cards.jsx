import React from 'react'
import Card from './card'
import Imagen1 from '../assets/img/comidas.jpg'
import Imagen2 from '../assets/img/bebidas.jpg'
import Imagen3 from '../assets/img/postres.jpg'
import '../css/cards.css'
  
const cards = [
    {
      id: 1,
      title: "Comidas",
      text: "Los mejores sabores de la Cocina Argentina",
      image: Imagen1,
      url: "menucomidas",
    },
    {
      id: 2,
      title: "Bebidas",
      text:"Variedad en bebidas",
      image: Imagen2,
      url: "",
    },
    {
      id: 3,
      title: "Postres",
      text:"Elige de nuestra carta exquisitos postres",
      image: Imagen3,
      url: "",
    },
  ];
  
  function Cards() {
    return (
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {cards.map(({ title,text, image, url, id }) => (
            <div className="col-md-4" key={id}>
              <Card imageSource={image} title={title} url={url} text={text}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Cards;
  