import Cabecalho from '../../components/Cabecalho.jsx'
import { Link } from 'react-router-dom'
import img1 from '../img/img-pedal-essencial.png'
import img2 from '../img/img-pedal-leve.png'
import img3 from '../img/img-pedal-elite.png'
import './Home.css'
import React, { useRef } from 'react';


export default function Home() {
    const sobreNosRef = useRef(null);
    const segurosRef = useRef(null);

    const scrollToSobreNos = () => {
        sobreNosRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSeguros = () => {
        segurosRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <Cabecalho scrollToSobreNos={scrollToSobreNos} scrollToSeguros={scrollToSeguros} />
            <section>
                <h3 ref={segurosRef} className="titulo-section-home">SEGUROS PARA SUA BICICLETA</h3>

                <div className="container-seguros-home">
                    <div className="img-seguros-home">
                        <Link to="/Login"><img src={img1} alt="seguro essencial" /></Link>
                        <Link to="/Login"><img src={img2} alt="seguro leve" /></Link>
                        <Link to="/Login"><img src={img3} alt="seguro elite" /></Link>
                    </div>
                    <div className="titulos-seguros-home">
                        <Link to="/Login"><div className="pedal-essencial-home">
                            <h5>PEDAL ESSENCIAL</h5>
                            <p>SAIBA MAIS</p>
                        </div></Link>
                        <Link to="/Login"><div className="pedal-leve-home">
                            <h5>PEDAL LEVE</h5>
                            <p>SAIBA MAIS</p>
                        </div></Link>
                        <Link to="/Login"><div className="pedal-elite-home">
                            <h5>PEDAL ELITE</h5>
                            <p>SAIBA MAIS</p>
                        </div></Link>
                    </div>
                </div>

                <div ref={sobreNosRef} className="sobre-home">
                    <h1>SOBRE NÓS</h1>
                    <p>NÓS SOMOS UMA EMPRESA DEDICADA A SIMPLIFICAR A CONTRATAÇÃO DE SEGURO DE BICICLETA, E ESTAMOS EM PARCERIA COM A PORTO SEGURO. OFERECEMOS UM SISTEMA ÁGIL E EFICIENTE PARA GARANTIR A SEGURANÇA DO MEIO DE TRANSPORTE. NOSSO OBJETIVO É TORNAR O PROCESSO DE CONTRATAÇÃO MAIS ACESSÍVEL E TRANSPARENTE, COM UM ATENDIMENTO PERSONALIZADO. TRABALHAMOS COM OS MELHORES PROFISSIONAIS DO MERCADO PARA OFERECER SOLUÇÕES PERSONALIZADAS. COMBINAMOS INOVAÇÃO E EXCELÊNCIA EM SERVIÇOS PARA PROTEGER SEU PATRIMÔNIO E PROPORCIONAR TRANQUILIDADE AO PEDALAR. CONTE CONOSCO PARA VIVER A LIBERDADE DE PEDALAR COM SEGURANÇA.</p>
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