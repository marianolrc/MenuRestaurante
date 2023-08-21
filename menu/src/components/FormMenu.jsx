import {useState, useRef} from 'react'


export default function FormMenu(){
    const [datos, setDatos] = useState({
        categoria_producto: '',
        subcategoria_producto:'',
        nombre_producto: '',
        descripcion:'',
        precio: '',
        imagen: ''
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
      
    return(
        <div>
            <form >
                <p>Seleccione la Categoria del Producto:</p>
                <select name="catProducto" id="catProducto">
                    <option value="comidas">Comidas</option>
                    <option value="bebidas">Bebidas</option>
                    <option value="postres">Postres</option>
                </select>
                <p>Seleccione la Subcategoria del Producto:</p>
                <select name="subCatProducto" id="subCatProducto">
                    <option value="minutas">Minutas</option>
                </select>
                <p>Nombre del Producto:</p>
                <input type="text" name="nombreProducto" id="nombreProducto" value={datos.nombre_producto} onChange={cambioProducto} />
                <p>Descripción para el Producto</p>
                <input type="text" name="descProducto" id="descProducto" value={datos.descripcion} onChange={cambioDescripcion} />
                <p>Precio del Producto:</p>
                <input type="number" name="precioProducto" id="precioProducto" value={datos.precio} onChange={cambioPrecio} />
                <p>Seleccione una imagen para asociar al producto:</p>
                <input type="file" accept="image/*" onChange={handleImageSelect} ref={subirImagen} style={{ display: 'none' }}  />
                <button onClick={() => subirImagen.current.click()}>Seleccionar Imagen</button>
                {selectedImage && <p>Imagen seleccionada: {selectedImage.name}</p>}


            </form>
        </div>
    )
}