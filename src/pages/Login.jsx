import React from 'react'
import '../styles/login.scss'

// Imagem
import logo from '../assets/logo.png'

// Icones
import {MdEmail, MdLock} from 'react-icons/md'

function recoverPassword(){
    alert("A recuperação de senha ainda está em construção, por favor contate o projeto pelo whatsapp.")
}

function Login(props) {

    function entrar(){

        // Recebendo as entradas
        let user = document.querySelector("#login-user").value
        let password = document.querySelector("#login-password").value   

        if(user.substring(0, 3) == "HSI"){
            // Acessando o banco de dados
            const usuariosRef = props.base.database().ref("infraestrutura");
            // Buscando conta
            usuariosRef.on("value", (snapshot) => {
                const usuarios = snapshot.val();   
                const data = []
                for(let key in usuarios){
                    if(usuarios[key]["ID"] === user && usuarios[key]["Senha"] === password){
                        data.push(usuarios[key]);
                    } 
                }

                localStorage.setItem("HerbertData", JSON.stringify(data));
                
                window.location.assign("/Home")    
            });
        } else if(user.substring(0, 4) == ("HS23")){
            // Acessando o banco de dados
            const usuariosRef = props.base.database().ref("usuarios");
            // Buscando conta
            usuariosRef.on("value", (snapshot) => {
                const usuarios = snapshot.val();   
                const data = []
                for(let key in usuarios){
                    if(usuarios[key]["ID"] === user && usuarios[key]["Senha"] === password){
                        data.push(usuarios[key]);
                    } 
                }
                console.log(data[0]["Complete"])
                localStorage.setItem("HerbertData", JSON.stringify(data));
                
                if(data[0]["Complete"] == false){
                    window.location.assign("/Complete")
                } else{
                    window.location.assign("/Home")  
                }
            });
        }
    }

    return (
        <div className='login-container'>
            
            <div className='logo-img-area'>
                <img src={logo} alt="Logo de Imagem" className='logo-img'/>
                <span className='logo-text'>Cursinho Popular Herbert de Souza</span>
            </div>
            
            <div className='img-login'>

            </div>

            <div className='login-field'>

                <span className='login-title'>Login</span>

                <div className='input-area'>

                    <div class="input-icon">
                        <MdEmail className='icon'/>
                        <input type="text" className='login-input' placeholder='Herbert ID' id="login-user" autocomplete="off"/>
                    </div>

                    <div class="input-icon">
                        <MdLock className='icon'/>
                        <input type="password" className='login-input' placeholder='Senha' id="login-password" autocomplete="off"/>
                    </div>

                    <span className='help-text' onClick={recoverPassword}>Esqueci minha senha</span>

                </div>

                <button className='btn-login' onClick={entrar}>Entrar</button>

                <div className='divisor'/>

                <span className='help-phrase'>Desenvolvido por <span className='text-warning'>@Archs</span>.</span>

            </div>

        </div>
    )
}

export default Login
