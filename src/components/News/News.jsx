import React, { useState } from 'react';

import './News.scss'

let data = [
    {"Nome": "Enem USP 2023: veja as notas de corte!", "Link": "https://vestibular.brasilescola.uol.com.br/noticias/unicamp-libera-2-chamada-do-vestibular-2023/354179.html", "Data": "03/03/2023", "Hora": "11:45"},
    {"Nome": "Pré-Enem Digital 2023, no Mato Grosso, recebe inscrições", "Link": "https://vestibular.brasilescola.uol.com.br/noticias/como-lidar-emocional-baixa-nota-enem-reprovacao-vestibular/354183.html", "Data": "03/03/2023", "Hora": "10:45"},
    {"Nome": "Primeiro lugar no Vestibular 2023 de Medicina da Unesp dá dicas de estudo", "Link": "https://vestibular.brasilescola.uol.com.br/enem/estudante-nota-1000-na-redacao-do-enem-2022-afirma-que-leitura-foi-seu-diferencial/354171.html","Data": "03/03/2023", "Hora": "12:00"},
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