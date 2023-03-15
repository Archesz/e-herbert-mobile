import React from 'react'
import Menu from '../components/Menu/Menu'
import DisciplinaIcon from '../components/DisciplinaIcon/DisciplinaIcon'
import News from '../components/News/News'

import { TbMathFunction, TbDna2, TbAtom, TbMap, TbSocial, TbBook2, TbPencil, TbBook } from 'react-icons/tb'
import { GiErlenmeyer, GiDinosaurBones, GiLogicGateOr} from 'react-icons/gi'


import '../styles/home.scss'
import Today from '../components/Today/Today'
import Perfil from '../components/Perfil/Perfil'

function Home(props) {

    let data = props.data

    return (
        <div className='container-home'>
            <Menu data={data}/>

            <div className='home-perfil'>

                <Perfil data={data}/>

            </div>

            <div className='home-disciplinas'>

                <span className='disciplinas-title'>Disciplinas</span>

                <div className='disciplinas'>
                    <DisciplinaIcon materia="Matemática" icon={<TbMathFunction className='icon'/>} color="red"/>
                    <DisciplinaIcon materia="Física" icon={<TbAtom className='icon'/>} color="green"/>
                    <DisciplinaIcon materia="Química" icon={<GiErlenmeyer className='icon'/>} color="green"/>
                    <DisciplinaIcon materia="Biologia" icon={<TbDna2 className='icon'/>} color="green"/>
                    <DisciplinaIcon materia="Geografia" icon={<TbMap className='icon'/>} color="yellow"/>
                    <DisciplinaIcon materia="História" icon={<GiDinosaurBones className='icon'/>} color="yellow"/>
                    <DisciplinaIcon materia="Filosofia" icon={<GiLogicGateOr className='icon'/>} color="yellow"/>
                    <DisciplinaIcon materia="Sociologia" icon={<TbSocial className='icon'/>} color="yellow"/>
                    <DisciplinaIcon materia="Literatura" icon={<TbBook2 className='icon'/>} color="blue"/>
                    <DisciplinaIcon materia="Gramática" icon={<TbPencil className='icon'/>} color="blue"/>
                    <DisciplinaIcon materia="Redação" icon={<TbBook className='icon'/>} color="blue"/>
                    <DisciplinaIcon materia="Inglês" icon={<TbBook className='icon'/>} color="blue"/>
                </div>

            </div>

            <div className='home-cards'>
                <News />
                <Today />

            </div>

        </div>
    )
}

export default Home