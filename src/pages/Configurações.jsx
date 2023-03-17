import React from 'react'
import '../styles/configuracao.scss'
import Menu from '../components/Menu/Menu'

function Configurações(props) {

    const objetoSerializado = localStorage.getItem("HerbertData");
    const data = JSON.parse(objetoSerializado)[0];

    //function updateData(){
    //    props.base.database().ref(`usuarios/${id}`).set(userData)
    //    .then(() => {
    //        console.log("Usuário adicionado com sucesso.")
    //    })
    //    .catch((error) => {
    //        console.log("Erro ao adicionar usuário: ", error)
    //    })
    //
    //    window.location.reload();
    //}

    return (
        <div className='configuracoes-container'>
            <Menu data={data}/>

            <div className='configuracoes-field'>

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
                    <input type="text" className='form-input' placeholder='Nome do Curso' id="newCourse"/>
                </div>

            </div>


        </div>
    )
}

export default Configurações