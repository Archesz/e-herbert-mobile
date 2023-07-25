import React, { useState } from 'react';
import './News.scss'

const data = [
  { "Nome": "Inscrições para o Vestibular 2024 da UEL estão abertas", "Link": "https://vestibular.brasilescola.uol.com.br/noticias/inscricoes-vestibular-2024-uel/354787.html", "Data": "25/07/2023", "Hora": "09:00" },
  { "Nome": "ENEM 2022: 7 PONTOS ESSENCIAIS PARA UMA REVISÃO COMPLETA", "Link": "https://www.megacurioso.com.br/educacao/123413-enem-2022-7-pontos-essenciais-para-uma-revisao-completa.htm", "Data": "25/07/2023", "Hora": "09:00" },
  { "Nome": "UERR 2024: inscrição do vestibular está aberta!", "Link": "https://vestibular.brasilescola.uol.com.br/noticias/uerr-abre-inscricao-para-o-vestibular-2024/354796.html", "Data": "25/07/2023", "Hora": "09:00" },
];

function News() {
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [touchStartPosition, setTouchStartPosition] = useState(null);

  const handleTouchStart = (event) => {
    setTouchStartPosition(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (touchStartPosition !== null) {
      const touchCurrentPosition = event.touches[0].clientX;
      const deltaX = touchCurrentPosition - touchStartPosition;

      if (deltaX < -50) {
        setCurrentDataIndex((currentDataIndex + 1) % data.length);
        setTouchStartPosition(null);
      } else if (deltaX > 50) {
        setCurrentDataIndex((currentDataIndex - 1 + data.length) % data.length);
        setTouchStartPosition(null);
      }
    }
  };

  const handleTouchEnd = () => {
    setTouchStartPosition(null);
  };

  return (
    <div className='news-container' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>

      <div className='news-image'></div>

      <div className='news-content'>

        <span className='news-name'>Herbert News</span>

        <a className='news-title' href={data[currentDataIndex].Link} target="_blank">
          {data[currentDataIndex].Nome}
        </a>

        <div className='news-date'>
          {data[currentDataIndex].Data} - {data[currentDataIndex].Hora}
        </div>

        <div className='news-count'>
          {data.map((_, index) => (
            <div
              key={index}
              className={`count ${index === currentDataIndex ? 'active' : ''}`}
            ></div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default News;