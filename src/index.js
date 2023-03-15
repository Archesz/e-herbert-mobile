import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './styles/global.scss'
import Home from './pages/Home';
import Quiz from './pages/Quiz';

const data = {
  "Nome": "João Vitor",
  "Apelido": "Jovi",
  "URLFoto": "https://pps.whatsapp.net/v/t61.24694-24/323807984_895529844989283_6961357159995897617_n.jpg?ccb=11-4&oh=01_AdSFbbfMfGtSFeq0w2QwhKvHSLkJ2YCWfIWubdhqTvvwnQ&oe=641E400D",
  "Conquistas": [
                {"Nome": "Matematicando", "URL": "https://cdn-icons-png.flaticon.com/512/3300/3300014.png", "Label": "Dei meus primeiros passos com matemática!"}, 
                {"Nome": "Oi, Ciência!", "URL": "https://cdn-icons-png.flaticon.com/512/5741/5741484.png", "Label": "Minha primeira questão de ciências."},
                {"Nome": "Darwin? It's me!", "URL": "https://static.thenounproject.com/png/365272-200.png", "Label": "Minha pontuação em evolução está alta!"}
              ],
  "Email": "jv86679@gmail.com",
  "Celular": "(19) 99539-7660"
}

const questions = [
  {
    text: 'Qual é a capital do Brasil?',
    options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Belo Horizonte'],
    answer: 'Brasília',
  },
  {
    text: 'Qual é a cor do céu?',
    options: ['Verde', 'Azul', 'Amarelo', 'Vermelho'],
    answer: 'Azul',
  },
  {
    text: 'Quem descobriu o Brasil?',
    options: ['Pedro Álvares Cabral', 'Cristóvão Colombo', 'Bartolomeu Dias', 'Vasco da Gama'],
    answer: 'Pedro Álvares Cabral',
  },
  {
    text:
      'O estudo da citologia (ou biologia celular) possibilitou a identificação de várias estruturas celulares e suas funções. Com base nesse estudo, explique a importância dos ribossomos para a síntese proteica.',
    options: [
      'Os ribossomos são responsáveis pela quebra de proteínas em aminoácidos',
      'Os ribossomos são responsáveis pela síntese de ácidos nucleicos',
      'Os ribossomos são responsáveis pela síntese de lipídios',
      'Os ribossomos são responsáveis pela síntese de proteínas',
    ],
    answer: 'Os ribossomos são responsáveis pela síntese de proteínas',
  },
  {
    text:
      'Os fungos são importantes decompositores e são utilizados para produção de alimentos e medicamentos. Com base nesse estudo, explique como os fungos se reproduzem.',
    options: [
      'Os fungos se reproduzem assexuadamente por meio da divisão celular',
      'Os fungos se reproduzem assexuadamente por meio de esporos',
      'Os fungos se reproduzem sexuadamente por meio da fertilização',
      'Os fungos se reproduzem sexuadamente por meio da clonagem',
    ],
    answer: 'Os fungos se reproduzem sexuadamente por meio da fertilização',
  },
  {
    text:
      'A tabela periódica é uma ferramenta fundamental para o estudo da química, que organiza os elementos químicos de acordo com suas propriedades. Com base nesse estudo, explique como é possível determinar o número de elétrons de um átomo a partir da sua posição na tabela periódica.',
    options: [
      'O número de elétrons de um átomo é igual ao seu número atômico',
      'O número de elétrons de um átomo é igual ao seu número de massa',
      'O número de elétrons de um átomo é igual ao número de prótons',
      'O número de elétrons de um átomo é igual à sua posição na tabela periódica',
    ],
    answer: 'O número de elétrons de um átomo é igual ao seu número atômico',
  },
  {
    text:
      'A Geometria Euclidiana é uma teoria matemática que se baseia em axiomas e postulados para provar teoremas e propriedades geométricas. Com base nesse estudo, explique o que é uma congruência de triângulos.',
    options: [
      'Congruência de triângulos é a propriedade que afirma que dois triângulos possuem medidas iguais em todos os seus lados e ângulos',
      'Congruência de triângulos é a propriedade que afirma que dois triângulos possuem apenas um lado e um ângulo iguais',
      'Congruência de triângulos é a propriedade que afirma que dois triângulos possuem apenas um lado e dois ângulos iguais',
      'Congruência de triângulos é a propriedade que afirma que dois triângulos possuem medidas diferentes em todos os seus lados e ângulos',
    ],
    answer:
      'Congruência de triângulos é a propriedade que afirma que dois triângulos possuem medidas iguais em todos os seus lados e ângulos',
  },
  {
    text:
      'Os ecossistemas são formados por diversas espécies de seres vivos que interagem entre si e com o ambiente. Com base nesse estudo, explique como a poluição pode afetar o equilíbrio de um ecossistema.',
    options: [
      'A poluição pode aumentar a diversidade de espécies no ecossistema',
      'A poluição pode diminuir a quantidade de nutrientes no ecossistema',
      'A poluição pode causar a morte de algumas espécies no ecossistema',
      'A poluição não afeta o equilíbrio de um ecossistema',
    ],
    answer: 'A poluição pode causar a morte de algumas espécies no ecossistema',
  },
  {
    text:
      'A genética é o estudo dos genes e hereditariedade. Com base nesse estudo, explique a diferença entre dominância completa e co-dominância em um cruzamento genético.',
    options: [
      'Dominância completa é quando os dois alelos são expressos igualmente, enquanto a co-dominância é quando apenas um alelo é expresso',
      'Dominância completa é quando apenas um alelo é expresso, enquanto a co-dominância é quando os dois alelos são expressos igualmente',
      'Dominância completa é quando apenas um alelo é expresso, enquanto a co-dominância é quando nenhum alelo é expresso',
      'Dominância completa e co-dominância são a mesma coisa',
    ],
    answer:
      'Dominância completa é quando apenas um alelo é expresso, enquanto a co-dominância é quando os dois alelos são expressos igualmente',
  }
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={data}/>
  },
  {
    path: "/Quiz",
    element: <Quiz questions={questions} data={data}/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
