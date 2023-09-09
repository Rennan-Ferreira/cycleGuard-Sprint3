import img1 from '../img/img-pedal-essencial.png'
import img2 from '../img/img-pedal-leve.png'
import img3 from '../img/img-pedal-elite.png'
export default function Home(){
    return(
        <>

            <section>
                <h3 className="titulo-section-home">SEGUROS PARA SUA BICICLETA</h3>

                <div className="container-seguros-home">
                    <div className="img-seguros-home">
                        <img src={img1} alt="seguro essencial" />
                        <img src={img2} alt="seguro leve" />
                        <img src={img3} alt="seguro elite" />
                    </div>
                    <div className="titulos-seguros-home">
                        <div className="pedal-essencial-home">
                            <h5>PEDAL ESSENCIAL</h5>
                            <p>SAIBA MAIS</p>
                        </div>
                        <div className="pedal-leve-home">
                            <h5>PEDAL LEVE</h5>
                            <p>SAIBA MAIS</p>
                        </div>
                        <div className="pedal-elite-home">
                            <h5>PEDAL ELITE</h5>
                            <p>SAIBA MAIS</p>
                        </div>
                    </div>
                </div>

                <div className="sobre-home">
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