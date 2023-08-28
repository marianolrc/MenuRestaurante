import {useState, useRef} from 'react'
import '../css/FormMenu.css'
import { Button } from 'react-bootstrap';

export default function FormMenu(){
    const [datos, setDatos] = useState({
        categoria_producto: '',
        subcategoria_producto:'',
        nombre_producto: '',
        descripcion:'',
        precio: '',
        imagen: null
    })

    const [selectedImage, setSelectedImage] = useState(null);
    const subirImagen = useRef(null);

    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
      };

      function cambioProducto(e) {
        e.preventDefault();
        setDatos((valores) => ({
          ...valores,
          nombre_producto: e.target.value,
        }));
      }
      
      function cambioDescripcion(e) {
        e.preventDefault();
        setDatos((valores) => ({
          ...valores,
          descripcion: e.target.value,
        }));
      }
      
      function cambioPrecio(e) {
        e.preventDefault();
        setDatos((valores) => ({
          ...valores,
          precio: e.target.value,
        }));
      }
      function cambioCategoria(e) {
        e.preventDefault();
        setDatos((valores) => ({
          ...valores,
          categoria_producto: e.target.value,
        }));
      }
      function cambioSubCategoria(e) {
        e.preventDefault();
        setDatos((valores) => ({
          ...valores,
          subcategoria_producto: e.target.value,
        }));
      }

      function procesar(e) {
        e.preventDefault();
        
        if (!selectedImage) {
          alert("Seleccione una imagen antes de cargar los datos.");
          return;
        }
      
        alert(`Dato Cargado ${datos.nombre_producto}, ${datos.descripcion} y ${datos.precio}`);
      }

      
      
      
    return(

        <div className='container-fluid formulario'>
        <form onSubmit={procesar}>
          <div className='form-group'>
            <label htmlFor='catProducto'>Ingrese la Categoria del Producto:</label>
            <input type='text' name='nombreProducto' id='nombreProducto' value={datos.categoria_producto} onChange={cambioCategoria} />
          </div>
          <div className='form-group'>
            <label>Ingrese la Subcategoria del Producto:</label>
            <input type='text' name='nombreProducto' id='nombreProducto' value={datos.subcategoria_producto} onChange={cambioSubCategoria} />
          </div>
          <div className='form-group'>
            <label>Nombre del Producto:</label>
            <input type='text' name='nombreProducto' id='nombreProducto' value={datos.nombre_producto} onChange={cambioProducto} />
          </div>
          <div className='form-group'>
            <label>Descripción para el Producto:</label>
            <input type='text' name='descProducto' id='descProducto' value={datos.descripcion} onChange={cambioDescripcion} />
          </div>
          <div className='form-group'>
            <label>Precio del Producto:</label>
            <input type='number' name='precioProducto' id='precioProducto' value={datos.precio} onChange={cambioPrecio} />
          </div>
          <div className='form-group'>
            <label>Seleccione una imagen para asociar al producto:</label>
            <input type='file' accept='image/*' onChange={handleImageSelect} ref={subirImagen} style={{ display: 'none' }} />
            <Button className='bg-primary' onClick={() => subirImagen.current.click()}>Seleccionar Imagen</Button>
            {selectedImage && <p>Imagen seleccionada: {selectedImage.name}</p>}
          </div>
          <div className='form-group'>
            <input className='boton-carga' type='submit' value='Cargar Producto' />
          </div>
        </form>
      </div>
    )
}