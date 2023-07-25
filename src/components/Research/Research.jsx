import React, {useState} from 'react'
import './Research.scss'

const data = [
    { "Nome": "A prova de fluxo ajuda os matemáticos a encontrar estabilidade no caos", "Link": "https://www.quantamagazine.org/flow-proof-helps-mathematicians-find-stability-in-chaos-20230615/", "Data": "25/07/2023", "Hora": "12:45" },
    { "Nome": "A matemática e a física podem salvar um coração arrítmico?", "Link": "https://www.quantamagazine.org/can-math-and-physics-save-an-arrhythmic-heart-20230712/", "Data": "25/07/2023", "Hora": "11:00" },
    { "Nome": "A New Approach to Computation Reimagines Artificial Intelligence", "Link": "https://www.quantamagazine.org/a-new-approach-to-computation-reimagines-artificial-intelligence-20230413/", "Data": "25/07/2023", "Hora": "11:00" },
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

                <a className='research-title' href={data[currentDataIndex].Link} target='_blank'>
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