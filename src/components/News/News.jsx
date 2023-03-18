import React, { useState } from 'react';
import './News.scss'

const data = [
  { "Nome": "UERJ 2024: último dia para solicitar a isenção da taxa do Vestibular", "Link": "https://vestibular.brasilescola.uol.com.br/noticias/vestibular-uerj-2024-ultimo-dia-para-pedir-isencao-da-taxa-de-inscricao/354320.html", "Data": "17/03/2023", "Hora": "11:00" },
  { "Nome": "ENEM 2023: confira como conseguir a isenção da taxa de inscrição", "Link": "https://vestibular.brasilescola.uol.com.br/enem/enem-2023-confira-como-conseguir-a-isencao-da-taxa-de-inscricao/354323.html", "Data": "17/03/2023", "Hora": "12:45" },
  { "Nome": "Datas do Vestibulinho 2023/2 das Etecs (SP) são liberadas", "Link": "https://vestibular.brasilescola.uol.com.br/noticias/etecs-sp-datas-do-vestibulinho-2023-2-sao-publicadas/354322.html", "Data": "17/03/2023", "Hora": "14:00" },
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

        <span className='news-name'>HerbertNews</span>

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