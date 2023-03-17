import React, { useState } from 'react';

import './News.scss'

let data = [
    {"Nome": "UERJ 2024: último dia para solicitar a isenção da taxa do Vestibular", "Link": "https://vestibular.brasilescola.uol.com.br/noticias/vestibular-uerj-2024-ultimo-dia-para-pedir-isencao-da-taxa-de-inscricao/354320.html", "Data": "17/03/2023", "Hora": "11:00"},
    {"Nome": "ENEM 2023: confira como conseguir a isenção da taxa de inscrição", "Link": "https://vestibular.brasilescola.uol.com.br/enem/enem-2023-confira-como-conseguir-a-isencao-da-taxa-de-inscricao/354323.html", "Data": "17/03/2023", "Hora": "12:45"},
    {"Nome": "Datas do Vestibulinho 2023/2 das Etecs (SP) são liberadas", "Link": "https://vestibular.brasilescola.uol.com.br/noticias/etecs-sp-datas-do-vestibulinho-2023-2-sao-publicadas/354322.html","Data": "17/03/2023", "Hora": "14:00"},
]

function News() {
    
    const [value, setValue] = useState(data[0]);

    function setActiveCount(value) {
        const counts = document.querySelectorAll('.count');
      
        if (value < 0 || value > counts.length) {
          return; // se o valor estiver fora do intervalo de 1 a 3, não faz nada
        }
      
        counts.forEach((count, index) => {
          if (index === value) {
            count.classList.add('active'); // adiciona a classe "active" na div correspondente ao valor
            setValue(data[value])
          } else {
            count.classList.remove('active'); // remove a classe "active" das outras divs
          }
        });
      }

    return (
        <div className='news-container'>
            
            <span className='news-name'>HerbertNews</span>

            <a className='news-title' href="https://vestibular.mundoeducacao.uol.com.br/noticias">{value["Nome"]}</a>

            <div className='news-date'>
                {value["Data"]} - {value["Hora"]}
            </div>

            <div className='news-count'>
                <div className='count active' onClick={() => {setActiveCount(0)}}></div>
                <div className='count' onClick={() => {setActiveCount(1)}}></div>
                <div className='count' onClick={() => {setActiveCount(2)}}></div>
            </div>
        </div>
    )
}

export default News