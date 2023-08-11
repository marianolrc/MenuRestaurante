import React from "react"
import { Link } from "react-router-dom"
import {Image} from "react-bootstrap"
import './Footer.css'

const Footer= () => {
    return(
        <div>
            <footer className="text-white py-4 bg-dark">
                <div className="conteiner">
                    <nav className="row">
                    <Link to='/' className="col-12 col-md-3 d-flef alling-items-center justyfy-content-center">
                    <Image className='img-nav' height={60} width={60} src="https://i.imgur.com/7Q4hkT0.png"   rounded/>
                    </Link>
                    <ul className="col-12 col-md-3  list-unstyled">
                        <li className="font-weigth-bold mb-2">Sugerengias</li>
                        <li className="tet-center">En este sitio web podras encontrar las mejores sugerencias para tu menu</li>
                    </ul>
                    <ul className="col-12 col-md-3  list-unstyled">
                        <li className="font-weigth-bold mb-2">Noticias</li>
                        <li>
                    
                        </li>
                    </ul>
                    <ul className="col-12 col-md-3  list-unstyled">
                        <li className="font-weigth-bold mb-2">Contactenos</li>
                        <li className="d-flex justify-content-between">
                        <i className="bi bi-facebook"/>
                        <i class="bi bi-instagram"/>
                        <i className="bi bi-twitter"/>
                        <i class="bi bi-whatsapp"/>
                        </li>
                    </ul>
                    <div className="Conteiner">
                    <p className="text-center mb-0 mt-2">&copy;2023 <b>Mr. Chef</b>-Todos los Derechos Reservados</p>

                    </div>

                    </nav>

                </div>

            </footer>

        </div>
    )

}
export default Footer
