import React, {useState} from 'react'
import './Research.scss'

const data = [
    { "Nome": "IC Unicamp: Unicamp recebe o primeiro Cluster Multi-FPGA do Brasil;", "Link": "", "Data": "08/07/2023", "Hora": "12:45" },
    { "Nome": "Como funciona o ChatGPT e os Transformers? O Fim vai chegar?", "Link": "", "Data": "08/07/2023", "Hora": "11:00" },
    { "Nome": "Modelo que mapeia e caracteriza Covid no pulmão é premiado na Unicamp.", "Link": "", "Data": "08/07/2023", "Hora": "11:00" },

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