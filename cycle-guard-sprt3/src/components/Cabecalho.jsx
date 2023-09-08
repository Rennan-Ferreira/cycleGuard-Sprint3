import { Link } from "react-router-dom";
export default function Cabecalho(){
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
                            <li><Link to="#">SEGUROS DISPONÍVEIS</Link></li>
                            <span>  |  </span>
                            <li><Link to="#">SOBRE NÓS</Link></li>
                            <span>  |  </span>
                            <li><Link to="#">LOGIN</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}