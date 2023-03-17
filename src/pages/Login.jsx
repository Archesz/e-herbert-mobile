import React from 'react'
import '../styles/login.scss'

// Imagem
import logo from '../assets/logo.png'

// Icones
import {MdEmail, MdLock} from 'react-icons/md'

function Login() {
    return (
        <div className='login-container'>
            
            <div className='logo-img-area'>
                <img src={logo} alt="Logo de Imagem" className='logo-img'/>
                <span className='logo-text'>Cursinho Popular Herbert de Souza</span>
            </div>

            <div className='login-field'>

                <span className='login-title'>Acessar como Herbertiano!</span>

                <div className='input-area'>

                    <div class="input-icon">
                        <MdEmail className='icon'/>
                        <input type="text" className='login-input' placeholder='Herbert ID'/>
                    </div>

                    <div class="input-icon">
                        <MdLock className='icon'/>
                        <input type="text" className='login-input' placeholder='Senha'/>
                    </div>

                    <span className='help-text'>Esqueci minha senha</span>

                </div>

                <button className='btn-login'>Entrar</button>

                <div className='divisor'/>

                <span className='help-phrase'>O projeto está na versão <span className='text-warning'>Alfa (Ver 0.0.8)</span>.</span>

            </div>

        </div>
    )
}

export default Login