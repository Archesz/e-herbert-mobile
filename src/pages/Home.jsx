import React from 'react'
import Menu from '../components/Menu/Menu'
import DisciplinaIcon from '../components/DisciplinaIcon/DisciplinaIcon'
import News from '../components/News/News'

import { TbMathFunction, TbDna2, TbAtom, TbMap, TbSocial, TbBook2, TbPencil, TbBook } from 'react-icons/tb'
import { GiErlenmeyer, GiDinosaurBones, GiLogicGateOr} from 'react-icons/gi'

import '../styles/home.scss'
import Today from '../components/Today/Today'
import Perfil from '../components/Perfil/Perfil'
import Footer from '../components/Footer/Footer'
import Research from '../components/Research/Research'
import Navmenu from '../components/Navmenu/Navmenu'

function goToDisciplina(disciplina){
    localStorage.setItem("Disciplina", disciplina);
    window.location.assign("/Disciplina")
}

function Home(props) {

    const objetoSerializado = localStorage.getItem("HerbertData");
    const data = JSON.parse(objetoSerializado)[0];

    return (
        <div className='container-home'>

            <Menu data={data}/>

            <div className='home-perfil-background'></div>

            <div className='home-perfil'>
                <Perfil data={data} config={false}/>

            </div>

            <div className='home-cards'>
                <News />
                <Today />
                <Research />
            </div>

            <Navmenu />
        </div>
    )
}

export default Home