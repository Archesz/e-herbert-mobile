import React, {useState} from 'react'
import './Research.scss'

const data = [
    { "Nome": "Unicamp vence competição Nacional de Computação em 1º e 3º Lugar!", "Link": "https://vestibular.brasilescola.uol.com.br/noticias/vestibular-uerj-2024-ultimo-dia-para-pedir-isencao-da-taxa-de-inscricao/354320.html", "Data": "17/03/2023", "Hora": "11:00" },
    { "Nome": "Nova Inteligência Artificial ChatGPT 4.0 está em funcionamento a partir do dia 21/03", "Link": "https://vestibular.brasilescola.uol.com.br/enem/enem-2023-confira-como-conseguir-a-isencao-da-taxa-de-inscricao/354323.html", "Data": "17/03/2023", "Hora": "12:45" },
    { "Nome": "Cientistas conseguem utilizar Redes Neurais artificiais para simular o processo de crescimento humano!","Link": ""}
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