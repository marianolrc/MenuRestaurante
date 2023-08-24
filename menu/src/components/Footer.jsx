import React from "react"
import { Link } from "react-router-dom"
import {Image} from "react-bootstrap"
import '../css/Footer.css'

const Footer= () => {
    return(
        <div className="container-fluid">
            <footer className="text-white py-4">
                <div className="conteiner">
                    <nav className="row">
                    <Link to='/' className="col-12 col-md-3 d-flef alling-items-center justyfy-content-center">
                    <Image className='img-nav' height={60} width={60} src="https://i.imgur.com/7Q4hkT0.png"   rounded/>
                    </Link>
                    <ul className="col-12 col-md-3  list-unstyled">
                        <li className="font-weigth-bold mb-2 text-center">Sugerengias</li>
                        <li className="tet-center">En este sitio web podras encontrar las mejores sugerencias para tu menu diario</li>
                    </ul>
                    <ul className="col-12 col-md-3  list-unstyled">
                        <li className="font-weigth-bold mb-2">Horarios</li>
                        <li>
                    Lunes a Sàdado de 12hs a 23 hs
                        </li>
                    </ul>
                    <ul className="col-12 col-md-3  list-unstyled">
                        <li className="font-weigth-bold mb-2 text-center">Contactenos</li>
                        <li className="d-flex justify-content-between">
                        <i className="bi bi-facebook"/>
                        <i class="bi bi-instagram"/>
                        <i className="bi bi-twitter"/>
                        <i class="bi bi-whatsapp"/>
                        </li>
                    </ul>
                    <hr />
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
