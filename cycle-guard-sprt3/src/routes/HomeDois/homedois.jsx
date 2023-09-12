import Cabecalho from '../../components/Cabecalho.jsx'
import { Link } from 'react-router-dom'
import img1 from '../img/img-pedal-essencial.png'
import img2 from '../img/img-pedal-leve.png'
import img3 from '../img/img-pedal-elite.png'
import css from './Homedois.css'
export default function Home(){

    document.title = 'Cycle Guard Security';

    return(
        <>
            
            <Cabecalho/>
            <section>
                <h3 className="titulo-section-home">SEGUROS PARA SUA BICICLETA</h3>

                <div className="container-seguros-home">
                    <div className="img-seguros-home">
                        <Link to="/DadosCliente"><img src={img1} alt="seguro essencial" /></Link>
                        <Link to="/DadosCliente"><img src={img2} alt="seguro leve" /></Link>
                        <Link to="/DadosCliente"><img src={img3} alt="seguro elite" /></Link>
                    </div>
                    <div className="titulos-seguros-home">
                        <Link to="/DadosCliente"><div className="pedal-essencial-home">
                                            <h5>PEDAL ESSENCIAL</h5>
                                            <p>SAIBA MAIS</p>
                                        </div></Link>
                        <Link to="/DadosCliente"><div className="pedal-leve-home">
                                            <h5>PEDAL LEVE</h5>
                                            <p>SAIBA MAIS</p>
                                          </div></Link>
                        <Link to="/DadosCliente"><div className="pedal-elite-home">
                                             <h5>PEDAL ELITE</h5>
                                             <p>SAIBA MAIS</p>
                                          </div></Link>
                    </div>
                </div>
                <div className="botao-vistoria-home">
                   <Link to="/DadosCliente"><button>
                        REALIZAR VISTORIA 
                    </button></Link> 
                </div>

                <div className="sobre-home">
                    <h1>PORTO SEGURO</h1>
                    <p>A Porto Seguro é uma empresa renomada no mercado de seguros, reconhecida pela sua qualidade e confiabilidade. Com mais de 70 anos de atuação, a empresa possui uma vasta gama de produtos que atendem às necessidades de seus clientes, desde seguros para automóveis e residências até seguros empresariais e de vida.
     A empresa se destaca pela sua capacidade de inovação, sempre buscando oferecer soluções diferenciadas e personalizadas para cada cliente. Além disso, a Porto Seguro conta com uma ampla rede de atendimento, que garante um atendimento rápido e eficiente em caso de sinistros.
     Ao contratar um seguro da Porto Seguro, o cliente pode ter a tranquilidade de que estará protegido em caso de imprevistos, tendo a certeza de que poderá contar com uma empresa sólida e confiável para ajudá-lo a superar qualquer adversidade.
     Um dos produtos oferecidos pela Porto Seguro é o seguro de bicicleta, uma opção cada vez mais procurada por ciclistas que querem garantir a proteção do seu meio de transporte. Com esse seguro, é possível ficar protegido em caso de roubo ou furto da bicicleta, além de contar com assistência 24 horas em caso de imprevistos durante o pedal. Esse seguro é uma excelente opção para quem valoriza a segurança e a tranquilidade na hora de pedalar, garantindo a proteção do patrimônio e a assistência necessária em caso de imprevistos. Com a Porto Seguro, o ciclista pode pedalar com a certeza de que estará protegido em qualquer situação</p>
                </div>
            </section>
            <footer>
                <div className="footer-container">
                    <div className="cycle-footer">
                        <h4>Cycle Guard</h4>
                        <p>Criada em 2023</p>
                        <p>São Paulo- Brasil</p>
                    </div>
                    <div className="menu-footer">
                        <h4>Menu</h4>
                        <p>Seguros Disponíveis</p>
                        <p>Sobre nós</p>
                    </div>
                    <div className="atendinmento-footer">
                        <h5>Atendimento 100% online</h5>
                    </div>
                </div>
                <div className="bloco-azul"></div>
            </footer>
        </>
    )
}