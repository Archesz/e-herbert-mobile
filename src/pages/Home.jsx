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

            <div className='home-disciplinas'>

                <span className='disciplinas-title'>Disciplinas</span>

                <div className='disciplinas'>
                    <DisciplinaIcon materia="Matemática" icon={<TbMathFunction className='icon'/>} color="red" onClick={() => {goToDisciplina("Matemática")}}/>
                    <DisciplinaIcon materia="Física" icon={<TbAtom className='icon'/>} color="green" onClick={() => {goToDisciplina("Física")}}/>
                    <DisciplinaIcon materia="Química" icon={<GiErlenmeyer className='icon'/>} color="green" onClick={() => {goToDisciplina("Química")}}/>
                    <DisciplinaIcon materia="Biologia" icon={<TbDna2 className='icon'/>} color="green" onClick={() => {goToDisciplina("Biologia")}}/>
                    <DisciplinaIcon materia="Geografia" icon={<TbMap className='icon'/>} color="yellow" onClick={() => {goToDisciplina("Geografia")}}/>
                    <DisciplinaIcon materia="História" icon={<GiDinosaurBones className='icon'/>} color="yellow" onClick={() => {goToDisciplina("História")}}/>
                    <DisciplinaIcon materia="Filosofia" icon={<GiLogicGateOr className='icon'/>} color="yellow" onClick={() => {goToDisciplina("Filosofia")}}/>
                    <DisciplinaIcon materia="Sociologia" icon={<TbSocial className='icon'/>} color="yellow" onClick={() => {goToDisciplina("Sociologia")}}/>
                    <DisciplinaIcon materia="Literatura" icon={<TbBook2 className='icon'/>} color="blue" onClick={() => {goToDisciplina("Literatura")}}/>
                    <DisciplinaIcon materia="Gramática" icon={<TbPencil className='icon'/>} color="blue" onClick={() => {goToDisciplina("Gramática")}}/>
                    <DisciplinaIcon materia="Redação" icon={<TbBook className='icon'/>} color="blue" onClick={() => {goToDisciplina("Redação")}}/>
                    <DisciplinaIcon materia="Inglês" icon={<TbBook className='icon'/>} color="blue" onClick={() => {goToDisciplina("Inglês")}}/>
                </div>

            </div>

            <div className='home-cards'>
                <News />
                <Today />
                <Research />
            </div>
        </div>
    )
}

export default Home