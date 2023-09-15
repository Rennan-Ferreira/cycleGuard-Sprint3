import { Link } from "react-router-dom";
import Homedois from "../routes/HomeDois/homedois";


export default function CabecalhoDois({ scrollToSobrePorto, scrollToSeguros, scrollToSobreVistoria }){
    return(
        <>
            <header className="cabecalho">
                <div className="logo-cabecalho">
                    <Link to="/">
                    <h1>CYCLE GUARD</h1>
                    <p>A MELHOR FORMA DE ADQUIRIR SEU SEGURO</p>
                    </Link>
                </div>
                <div class="nav-links">
                    <nav>
                        <ul>
                            <li><Link to="#" onClick={scrollToSeguros}>SEGUROS DISPONÍVEIS</Link></li>
                            <span>  |  </span>
                            <li><Link to="#" onClick={scrollToSobrePorto}>PORTO SEGURO</Link></li>
                            <span>  |  </span>
                            <li><Link  to="#" onClick={scrollToSobreVistoria}>VISTORIA</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}