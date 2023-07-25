import React from 'react'
import Menu from '../components/Menu/Menu'
import DisciplinaIcon from '../components/DisciplinaIcon/DisciplinaIcon'
import Navmenu from '../components/Navmenu/Navmenu'
import { TbMathFunction, TbDna2, TbAtom, TbMap, TbBook2, TbPencil, TbBook, TbBrain, TbNews } from 'react-icons/tb'
import { GiErlenmeyer, GiDinosaurBones } from 'react-icons/gi'
import { MdGroups, MdComputer } from 'react-icons/md'
import { RiEnglishInput } from 'react-icons/ri'
import { FaUniversity } from 'react-icons/fa'

import '../styles/disciplinas.scss'

function goToDisciplina(disciplina){
    localStorage.setItem("Disciplina", disciplina);
    window.location.assign("/Disciplina")
}

function Disciplinas() {

    const objetoSerializado = localStorage.getItem("HerbertData");
    const data = JSON.parse(objetoSerializado)[0];

    return (
        <div className="disciplinas-container">

            <Menu data={data}/>

            <div className='disciplinas'>

                <span className='disciplinas-title'>Disciplinas</span>
                <span className='disciplinas-explain'>
                    Explore nossas disciplinas para ajudar com os estudos. 
                    Descubra e aprenda de forma envolvente em cada matéria, com materiais selecionados e avaliados por nós para enriquecer o seu conhecimento.
                </span>
                <div className='disciplinas'>
                    <DisciplinaIcon materia="Matemática" icon={<TbMathFunction className='icon'/>} color="red" onClick={() => {goToDisciplina("Matemática")}}/>
                    <DisciplinaIcon materia="Física" icon={<TbAtom className='icon'/>} color="red" onClick={() => {goToDisciplina("Física")}}/>
                    <DisciplinaIcon materia="Química" icon={<GiErlenmeyer className='icon'/>} color="red" onClick={() => {goToDisciplina("Química")}}/>
                    <DisciplinaIcon materia="Biologia" icon={<TbDna2 className='icon'/>} color="red" onClick={() => {goToDisciplina("Biologia")}}/>
                    <DisciplinaIcon materia="Geografia" icon={<TbMap className='icon'/>} color="red" onClick={() => {goToDisciplina("Geografia")}}/>
                    <DisciplinaIcon materia="História" icon={<GiDinosaurBones className='icon'/>} color="red" onClick={() => {goToDisciplina("História")}}/>
                    <DisciplinaIcon materia="Filosofia" icon={<TbBrain className='icon'/>} color="red" onClick={() => {goToDisciplina("Filosofia")}}/>
                    <DisciplinaIcon materia="Sociologia" icon={<MdGroups className='icon'/>} color="red" onClick={() => {goToDisciplina("Sociologia")}}/>
                    <DisciplinaIcon materia="Literatura" icon={<TbBook2 className='icon'/>} color="red" onClick={() => {goToDisciplina("Literatura")}}/>
                    <DisciplinaIcon materia="Gramática" icon={<TbPencil className='icon'/>} color="red" onClick={() => {goToDisciplina("Gramática")}}/>
                    <DisciplinaIcon materia="Redação" icon={<TbBook className='icon'/>} color="red" onClick={() => {goToDisciplina("Redação")}}/>
                    <DisciplinaIcon materia="Inglês" icon={<RiEnglishInput className='icon'/>} color="red" onClick={() => {goToDisciplina("Inglês")}}/>
                </div>

            </div>

            <div className='disciplinas'>

                <span className='disciplinas-title'>Extras e Complementos</span>

                <div className='disciplinas'>
                    <DisciplinaIcon materia="Tecnologia" icon={<MdComputer className='icon'/>} color="red" onClick={() => {goToDisciplina("/")}}/>
                    <DisciplinaIcon materia="Atualidades" icon={<TbNews className='icon'/>} color="red" onClick={() => {goToDisciplina("/")}}/>
                    <DisciplinaIcon materia="Vestibulares" icon={<FaUniversity className='icon'/>} color="red" onClick={() => {goToDisciplina("/")}}/>
                </div>

            </div>

            <Navmenu />

        </div>    
    )
}

export default Disciplinas