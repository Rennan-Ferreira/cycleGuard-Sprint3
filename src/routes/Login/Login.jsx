import { Link } from "react-router-dom";
import Homedois from "../HomeDois/homedois";

export default function Login(){
    return(
    <>
    <body class="tela-login">
        <div class="logotipo-login">
            <h1 class="titulo-login">Cycle Guard</h1>
        </div>
        <div class="formulario">
            <div class="login">
                <h1 class="login-texto">LOGIN</h1>
                <form action="" class="forms">
                    <label for="email">
                        EMAIL
                        <input class="email" type="text" placeholder="Email"/>
                    </label>
                    <label for="password">
                        SENHA
                        <input class="password" type="text" placeholder="senha"/>
                    </label>
                    <Link to="/EsqueceuSenha"><h5 class="esqueceu-senha">Esqueceu a senha?</h5></Link>
                </form>
                <Link to='/homedois'>
                <button class="botao-login">ENTRAR</button>
                </Link>
            </div>
        </div>
        <div class="aba-cadastrar">
            <h1 class="txt-1">AINDA NÃO POSSUI CADASTRO?</h1>
            <p class="paragrafo-1">O cadastro é 100% gratuito e seguro, não pediremos nenhuma informação confidencial.</p>
           
           
            <button class="cadastrar-se">
             <Link to="/Cadastro">Cadastrar-se</Link> 
                </button>
        </div>
    </body>

    </>
    )
}