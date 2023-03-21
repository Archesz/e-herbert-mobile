import React from 'react'
import '../styles/configuracao.scss'
import Menu from '../components/Menu/Menu'

function Configurações(props) {

    const objetoSerializado = localStorage.getItem("HerbertData");
    const data = JSON.parse(objetoSerializado)[0];

    function updateData(){
        let id = data["ID"]
        let apelido = document.querySelector("#newApelido").value;
        let foto = document.querySelector("#newFoto").value;
        let curso = document.querySelector("#newCurso").value;


        if(apelido != ""){
            data["Apelido"] = apelido
        } 
        if(foto != ""){
            data["URLFoto"] = foto
        }
        if(curso != ""){
            data["Primeira Opção"] = curso
        }

        props.base.database().ref(`usuarios/${id}`).update(data)
        .then(() => {
            console.log("Usuário atualizado com sucesso.")
        })
        .catch((error) => {
            console.log("Erro ao adicionar usuário: ", error)
        })

        localStorage.setItem("HerbertData", JSON.stringify([data]));

        window.location.assign('/Home')    
    }

    return (
        <div className='configuracoes-container'>
            <Menu data={data}/>

            <div className='configuracoes-field'>

                <div className='input-group'>
                    <span className='label'>Apelido</span>
                    <input type="text" className='form-input' placeholder='Qual seu apelido?' id="newApelido"/>
                </div>

                <div className='input-group'>
                    <span className='label'>Foto</span>
                    <input type="text" className='form-input' placeholder='URL de uma foto' id="newFoto"/>
                </div>

                <div className='input-group'>
                    <span className='label'>Instagram</span>
                    <input type="text" className='form-input' placeholder='Link do Instagram' id="newInstagram"/>
                </div>

                <div className='input-group'>
                    <span className='label'>Twitter</span>
                    <input type="text" className='form-input' placeholder='Link do twitter' id="newTwitter"/>
                </div>

                <div className='input-group'>
                    <span className='label'>Universidade (Futuro)</span>
                    <input type="text" className='form-input' placeholder='Nome da Universidade' id="newUniversity"/>
                </div>

                <div className='input-group'>
                    <span className='label'>Curso Pretendido</span>
                    <input type="text" className='form-input' placeholder='Nome do Curso' id="newCurso"/>
                </div>
                
                <button className='btn-update' onClick={updateData}>Atualizar</button>

            </div>


        </div>
    )
}

export default Configurações