import React, {useState} from 'react'
import './Research.scss'

const data = [
    { "Nome": "IC Unicamp: Inteligência Artificial capaz de reconhecer abusos sexuais infantil", "Link": "", "Data": "28/05/2023", "Hora": "12:45" },
    { "Nome": "Brasileiras ganham medalha nas Olimpiadas Feminina de Matemática da Europa (EMGO)!", "Link": "", "Data": "28/05/2023", "Hora": "11:00" },
    { "Nome": "Modelo capaz de prever futuros casos de Alzheimer entrará em uso no HC da UNICAMP e Albert Einstein.!", "Link": "", "Data": "28/05/2023", "Hora": "11:00" },

];

function Research() {
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
        <div className='research-container' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>

            <div className='research-image'></div>

            <div className='research-content'>

                <span className='research-name'>Pesquisa e Ciência</span>

                <a className='research-title' href={data[currentDataIndex].Link}>
                    {data[currentDataIndex].Nome}
                </a>

                <div className='research-date'>
                    {data[currentDataIndex].Data} - {data[currentDataIndex].Hora}
                </div>

                <div className='research-count'>
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

export default Research