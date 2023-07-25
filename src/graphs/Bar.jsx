import React from 'react';
import Plot from 'react-plotly.js';

const layout = {
    title: "Acertos por Disciplina",
    margin: {
        l: 75,
        r: 30,
        t: 80,
        b: 30,
        pad: 0,
    },
    plot_bgcolor: 'rgba(0,0,0,0)', // Define a cor do fundo do gráfico como transparente
    paper_bgcolor: 'rgba(0,0,0,0)', // Define a cor do papel de fundo como transparente
    xaxis: {
        title: 'Acertos',
        tickfont: {
            color: 'white', // Define a cor dos rótulos do eixo x como branco
          },
    },
    yaxis: {
        tickmode: 'array', // Define o modo de posicionamento dos rótulos dos ticks
        tickfont: {
            color: 'white', // Define a cor dos rótulos do eixo x como branco
        },
        tickangle: -20,
        
    }
};

function Bar(props) {

    if (props.type == "Acertos") {
        return (
            <Plot
                data={[
                    {
                        y: ["Total", "Matemática", "Física", "Química", "Biologia", "História", "Geografia", "Gramática", "Literatura", "Filosofia", "Sociologia"],
                        x: [52, 12, 6, 4, 6, 4, 4, 5, 5, 3, 3],
                        type: 'bar',
                        orientation: 'h',
                        marker: { color: 'red' },
                    }
                ]}
                layout={layout}
            />
        );
    } else if (props.type == "Problemas") {
        return (
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'red' },
                    },
                    { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                ]}
                layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
            />
        );
    }
}

export default Bar;