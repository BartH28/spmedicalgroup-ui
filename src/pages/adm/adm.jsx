import Header from "../../components/header/header";
import "../../assets/css/admS.css";
// import "../../assets/css/reset.css";


export default function Administracao() {
    return (
        <div>
            <Header />
            <main className="main_adm">
                <div class="main_container ">
                    
                    <div class="main_Selector"><a class="" href="../pages/Consultas.html"> Consultas</a> </div>
                    <div class="main_Selector">Usuarios</div>
                </div>
                <div class="main_container ">
                    <div class="main_Selector">Clinicas</div>
                    <div class="main_Selector">Endereços</div>
                </div>

            </main>

        </div>
    )
}