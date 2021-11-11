import Header from "../../components/header/header";
import "../../assets/css/minhasConsultas.css"
import "../../assets/css/reset.css"

export default function minhasConsultas(){



    return(
        <div>
            <Header/>
            <main>
                <div className="Container_Consulta">
                    <span className="legenda_consu">Usuario</span>
                    <span className="legenda_consu">Medico</span>
                    <span className="legenda_consu">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio aliquid earum adipisci, laborum quo qui alias ex veritatis voluptatem rerum! Doloremque beatae sint hic sequi voluptatem totam laboriosam maiores minus.</span>
                    <span className="legenda_consu">20/03/2021</span>
                </div>
            </main>
        </div>

        

    )

}