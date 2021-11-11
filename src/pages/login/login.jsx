import{ useState} from 'react'
import axios from  'axios'
import {parseJwt, usuarioAutenticado} from '../../Services/auth'

import '../../assets/css/loginS.css'
import '../../assets/css/reset.css'
import imgLogin from '../../assets/img/pexels-jonathan-borba-3259624 1.png'
import imgForm from '../../assets/img/logo_spmedgroup_v1 2.png'
import { useHistory } from 'react-router-dom'
// import { isFlowDeclaration } from '@babel/types'

export default function Login(){
    const[ email, setEmail] = useState('')
    const[ senha, setSenha] = useState('')
    const[ errorMsg, setErrorMsg] = useState('')
    const[ loading, setLoading] = useState(false)
    let history = useHistory();

    function efetuaLogin(evento){
        evento.preventDefault()
        setLoading(true)
        setErrorMsg('')

        axios.post('http://localhost:5000/api/Login',{email: email,senha: senha})
        .then((r)=> {
                if (r.status === 200) {
                    localStorage.setItem('usuario-login', r.data.token);

                    setLoading(false)

                    let base64 = localStorage.getItem('usuario-login').split('.')[1];
                    console.log(base64)

                    if (usuarioAutenticado && parseJwt().role === 2) {
                        history.push('/')
                    }else {
                        history.push('/consultas')
                    }
                }
            })
            .catch(() => {
                setErrorMsg( 'E-mail e/ou senha inválidos!')

                setLoading(false)  
                  
                });

    }

    return(
        <div>
            <main>
                <div className="container-form-Usuario">
                    <img className="logo-form" src={imgForm} alt="logo sp medical group" />
                    <span className="BemVindo-span">Bem-Vindo,Usuario</span>
                    <form onSubmit={efetuaLogin}>
                        <input type="email" value={email} onChange={(campo) => setEmail(campo.target.value) } placeholder="Email" name="email" id="inp-email" />
                        <input type="password" value={senha} onChange={(campo) => setSenha(campo.target.value) } placeholder="Senha" name="senha" id="inp-password" />
                        <span className="Esqueceu-Span">Esqueceu a senha?</span>
                         <p>{errorMsg}</p>
                        {
                            loading === false &&
                        <button className="btn_login_L"  type="submit">Login</button>
                        }
                        {
                            loading === true &&
                        <button className="btn_login_L" disabled type="submit">loading</button>
                        }

                    </form>
                </div>
                    <img className="img-login-U" src={imgLogin} alt="Mulher aplicando cirurgia" />
            </main>
        </div>
    )
}