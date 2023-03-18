import React from 'react'
import './Nivel.scss'

function getColor(nivel){

}

function getImage(area){
    let colorArea = "";
    let colorText = "";
    if(area == "Exatas"){
        colorArea = "#ef233c"
        colorText = "#ffffff"
    } else if(area == "Natureza"){
        colorArea = "#57cc99"
        colorText = "#3a3a3a"
    } else if(area == "Humanidades"){
        colorArea = "#ffb703"
        colorText = "#3a3a3a"
    } else if(area == "Linguagens"){
        colorArea = "#8ecae6"
        colorText = "#3a3a3a"
    }

    return colorArea, colorText
}

function Nivel(props) {

    let colorArea, colorText = getImage(props.area)

    return (
        <div style={{backgroundColor: colorArea, color: colorText}} className={`circle-nivel`} >
            {props.nivel}
        </div>
    )
}

export default Nivel