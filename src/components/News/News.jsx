import React, { useState } from 'react';
import './News.scss'

const data = [
  { "Nome": "Mutirão de Limpeza da Sala Dandara (29/04)", "Link": "", "Data": "27/04/2023", "Hora": "12:00" },
  { "Nome": "Último dia para pedidos de Isenção do Enem", "Link": "https://educacao.uol.com.br/noticias/2023/04/28/enem-candidatos-tem-ate-esta-sexta-feira-para-pedir-isencao-de-taxa.htm", "Data": "28/04/2023", "Hora": "12:45" },
  { "Nome": "Projeto 'Meninas Super Cientistas abre inscrições'", "Link": "https://www.ime.unicamp.br/meninassupercientistas/", "Data": "29/04/2023", "Hora": "14:00" },
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

        <a className='news-title' href={data[currentDataIndex].Link}>
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