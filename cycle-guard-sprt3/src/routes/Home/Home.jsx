import img1 from '../img/img-pedal-essencial.png'
import img2 from '../img/img-pedal-leve.png'
export default function Home(){
    return(
        <>
            <h3>SEGUROS PARA SUA BICICLETA</h3>

            <div className="container-seguros-home">
                <div className="img-seguros-home">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img1} alt="" />
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

        </>
    )
}