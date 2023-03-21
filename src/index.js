import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './styles/global.scss'

import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Disciplina from './pages/Disciplina';
import Conteudo from './pages/Conteudo';
import Eventos from './pages/Eventos';
import Configurações from './pages/Configurações';

// Firebase
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Footer from './components/Footer/Footer';
import PerfilConfig from './pages/PerfilConfig';
import Biblioteca from './pages/Biblioteca';

const firebaseConfig = {
  apiKey: "AIzaSyDZc7R_-lLK9xKfa4_610JI7Izk4b831Xc",
  authDomain: "crudherbert.firebaseapp.com",
  databaseURL: "https://crudherbert-default-rtdb.firebaseio.com",
  projectId: "crudherbert",
  storageBucket: "crudherbert.appspot.com",
  messagingSenderId: "382234945560",
  appId: "1:382234945560:web:e0e3b7df6c372bc513fb6d",
  measurementId: "G-RBB092Q5HF"
};

firebase.initializeApp(firebaseConfig);

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
  "Celular": "(19) 99539-7660",
  "Social": {
    "Instagram": "https://www.instagram.com/jovi.arch/",
    "Twitter": "https://twitter.com/Jovarch",
    "Whatsapp": "https://wa.me/5519995397660",
  }
}

const questions = [
  {
    "text": "Qual é o valor de x na equação 2x + 3 = 9?",
    "options": ["x = 3", "x = 2", "x = 1", "x = 4"],
    "answer": "x = 3"
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
    answer: 'Os fungos se reproduzem assexuadamente por meio de esporos',
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
    "text": "Uma loja vende camisetas por R$ 30 cada. Se um cliente compra x camisetas, ele paga R$ 120 no total. Qual é o valor de x?",
    "options": ["x = 2", "x = 3", "x = 4", "x = 5"],
    "answer": "x = 4"
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
  },
  {
    "text": "Qual foi a invasão que marcou o início da Segunda Guerra Mundial na Europa?",
    "options": ["Invasão da Polônia", "Invasão da França", "Invasão da União Soviética", "Invasão da Bélgica"],
    "answer": "Invasão da Polônia"
  }
];

let data3 = {
  "Materia": "Matemática",
  "Nome": "Equação do 1º Grau",
  "Material": [{"Nome": "Introdução a Equação de 1º Grau", "Link": "https://drive.google.com/file/d/1yHojMK9VH3qoNP6aZ15X8Q5j1OUwIDO1/view?usp=share_link"},
               {"Nome": "Equações de 1º Grau - Regras", "Link": "https://drive.google.com/file/d/13CRTTCpjc9VUcyyoNfT6BL8zC0tWbn45/view?usp=share_link"}],
  "Exercicios": [
    {"Enunciado": "Qual é a solução da equação 3x + 4 = 10?", "Alternativas": ["a) x = 2", "b) x = 3", "c) x = 4", "d) x = 5"], "Gabarito": "a) x = 2"},
    {"Enunciado": "Qual é a solução da equação 2x + 5 = 3x - 1?", "Alternativas": ["a) x = 6", "b) x = 6", "c) x = -6", "d) x = -7"], "Gabarito": "b) x = 7", "Resolução": "Para resolver a equação 2x + 5 = 3x - 1, precisamos encontrar o valor de x que satisfaz a equação. Para isso, podemos seguir os seguintes passos:\n\n1. Isolar o termo com x em um lado da equação. Podemos fazer isso subtraindo 2x de ambos os lados da equação, o que nos dá:\n\n   2x + 5 - 2x = 3x - 1 - 2x\n\n   Simplificando, temos:\n\n   5 = x - 1\n\n2. Isolar x no lado direito da equação. Podemos fazer isso adicionando 1 a ambos os lados da equação, o que nos dá:\n\n   5 + 1 = x - 1 + 1\n\n   Simplificando, temos:\n\n   6 = x\n\nPortanto, a solução da equação 2x + 5 = 3x - 1 é x = 6. Podemos verificar que isso é verdadeiro substituindo x = 6 na equação original:\n\n   2(6) + 5 = 3(6) - 1\n\n   12 + 5 = 18 - 1\n\n   17 = 17\n\n   Como a igualdade é verdadeira, a solução x = 6 é válida."},
    {"Enunciado": "Uma loja de eletrônicos oferece um desconto de R$ 50,00 em todos os smartphones à venda. Se o preço original de um smartphone é de R$ 900,00, qual é o preço com o desconto?", "Alternativas": ["a) R$ 850,00", "b) R$ 860,00", "c) R$ 870,00", "d) R$ 880,00"], "Gabarito": "a) R$ 850,00"},
    {"Enunciado": "Um pintor cobra R$ 35,00 por hora para pintar paredes. Ele foi contratado para pintar duas paredes de um cômodo, uma medindo 4 metros de largura por 3 metros de altura e outra medindo 3 metros de largura por 3 metros de altura. Se ele leva em média 4 horas para pintar cada parede, qual é o valor total que ele vai cobrar pelo trabalho?", "Alternativas": ["a) R$ 420,00", "b) R$ 440,00", "c) R$ 460,00", "d) R$ 480,00"], "Gabarito": "d) R$ 480,00"},
  ]
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login base={firebase}/>
  },
  {
    path: "/Home",
    element: <Home data={data} base={firebase}/>
  },
  {
    path: "/Quiz",
    element: <Quiz questions={questions} data={data} base={firebase}/>
  },
  {
    path: "/Disciplina",
    element: <Disciplina data={data} base={firebase}/>
  },
  {
    path: "/Conteudo",
    element: <Conteudo data={data3} user={data} base={firebase}/>
  },
  {
    path: "Perfil",
    element: <PerfilConfig base={firebase}/>
  },
  {
    path: "Eventos",
    element: <Eventos base={firebase}/>
  },
  {
    path: "Biblioteca",
    element: <Biblioteca base={firebase}/>
  },
  {
    path: "Configuracao",
    element: <Configurações base={firebase}/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
