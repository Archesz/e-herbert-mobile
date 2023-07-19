import React from 'react'
import Menu from '../components/Menu/Menu'
import DisciplinaIcon from '../components/DisciplinaIcon/DisciplinaIcon'
import Navmenu from '../components/Navmenu/Navmenu'
import { TbMathFunction, TbDna2, TbAtom, TbMap, TbSocial, TbBook2, TbPencil, TbBook } from 'react-icons/tb'
import { GiErlenmeyer, GiDinosaurBones, GiLogicGateOr } from 'react-icons/gi'

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

            <div className='disciplinas'>

                <span className='disciplinas-title'>Extras e Complementos</span>

                <div className='disciplinas'>
                    <DisciplinaIcon materia="Atualidades" icon={<TbMathFunction className='icon'/>} color="red" onClick={() => {goToDisciplina("Matemática")}}/>
                    <DisciplinaIcon materia="Computação" icon={<TbAtom className='icon'/>} color="green" onClick={() => {goToDisciplina("Física")}}/>
                    <DisciplinaIcon materia="Guia do Estudo" icon={<GiErlenmeyer className='icon'/>} color="green" onClick={() => {goToDisciplina("Química")}}/>
                </div>

            </div>

            <Navmenu />

        </div>    
    )
}

export default Disciplinas