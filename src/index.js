import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './styles/global.scss'

import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Disciplinas from './pages/Disciplinas';
import Disciplina from './pages/Disciplina';
import Conteudo from './pages/Conteudo';
import Eventos from './pages/Eventos';
import Configurações from './pages/Configurações';
import Dashboard from './pages/Dashboard';
import Graphs from './pages/Graphs';

// Firebase
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Footer from './components/Footer/Footer';
import PerfilConfig from './pages/PerfilConfig';
import Biblioteca from './pages/Biblioteca';
import Complete from './pages/Complete';

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
    { "Nome": "Matematicando", "URL": "https://cdn-icons-png.flaticon.com/512/3300/3300014.png", "Label": "Dei meus primeiros passos com matemática!" },
    { "Nome": "Oi, Ciência!", "URL": "https://cdn-icons-png.flaticon.com/512/5741/5741484.png", "Label": "Minha primeira questão de ciências." },
    { "Nome": "Darwin? It's me!", "URL": "https://static.thenounproject.com/png/365272-200.png", "Label": "Minha pontuação em evolução está alta!" }
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
    text: "É comum encontrarmos, nos supermercados, produtos semelhantes em suas finalidades, porém em quantidades, concentrações de ingredientes e preços bem variados. Imagine três produtos com propriedades desinfetantes, com o mesmo princípio ativo. Os produtos têm as seguintes características: Produto A: 0,45% (massa/massa) do princípio ativo, conteúdo de 1 L, valor R$ 11,90; Produto B: 0,17% (massa/massa) do princípio ativo, conteúdo de 0,5 L, valor R$ 2,49; Produto C: 0,33% (massa/massa) do princípio ativo, conteúdo de 2 L, valor R$ 5,19. Os produtos que oferecem a melhor relação custo/benefício seriam, em ordem crescente:",
    options: ["A, B, C.", "C, A, B.", "C, B, A.", "B, C, A."],
    answer: "C, A, B."
  },
  {
    text: "No plano cartesiano, considere a reta de equação x + 2y = 4, sendo A, B os pontos de interseção dessa reta com os eixos coordenados. A equação da reta mediatriz do segmento de reta AB é dada por",
    options: [
      "2x - y = 3.",
      "2x - y = 5.",
      "2x + y = 3.",
      "2x + y = 5.",
    ],
    answer: '2x - y = 3.',
  },
  {
    text:
      'Considere que os ângulos internos de um triângulo formam uma progressão aritmética. Dado que a, b, c são as medidas dos lados do triângulo, sendo a < b < c, é correto afirmar que',
    options: [
      "b² + ac = a² +c²",
      "a² + bc = b² +c²",
      "a² - bc = b² +c²",
      "b² - ac = a² +c²",
    ],
    answer: 'b² + ac = a² +c²',
  },
  {
    text:
      'A soma dos valores de x que resolvem a equação (1/2 + 1/3) / (x/4 + 1/x) = 1/2 é igual a?',
    options: [
      "14/3",
      "16/3",
      "18/3",
      "20/3",
    ],
    answer: '20/3',
  },
  {
    text:
      'O número de anagramas da palavra REFLORESTAMENTO que começam com a sequência FLORES é',
    options: [
      "9!.",
      "9!/2!",
      "9!/(2!2!).",
      "9!/(2!2!2!)",
    ],
    answer:
      '9!(2!2!).',
  },
  {
    "text": "Uma loja vende camisetas por R$ 30 cada. Se um cliente compra x camisetas, ele paga R$ 120 no total. Qual é o valor de x?",
    "options": ["x = 2", "x = 3", "x = 4", "x = 5"],
    "answer": "x = 4"
  },
  {
    text:
      'Dados preliminares da pandemia do Covid-19 indicam que, no início da disseminação, em determinada região, o número de pessoas contaminadas dobrava a cada 3 dias. Usando que log10 2 ≈ 0,3 e log10 5 ≈ 0,7, após o primeiro contágio, o número de infectados atingirá a marca de 4 mil entre',
    options: [
      'o 18º dia e o 24º dia.',
      'o 25º dia e o 31º dia.',
      'o 32º dia e o 38º dia.',
      'o 39º dia e o 45º dia.',
    ],
    answer:
      'o 32º dia e o 38º dia.',
  },
  {
    text: "Duas impressoras funcionando simultaneamente imprimem certa quantidade de páginas em 36 segundos. Sozinha, uma delas imprime a mesma quantidade de páginas em 90 segundos. Funcionando sozinha, para imprimir a mesma quantidade de páginas, a outra impressora gastaria",
    options: [
      "48 segundos.",
      "54 segundos.",
      "60 segundos.",
      "72 segundos.",
    ],
    answer: "60 segundos."
  }
];

let data3 = {
  "Materia": "Matemática",
  "Nome": "Equação do 1º Grau",
  "Material": [{ "Nome": "Introdução a Equação de 1º Grau", "Link": "https://drive.google.com/file/d/1yHojMK9VH3qoNP6aZ15X8Q5j1OUwIDO1/view?usp=share_link" },
  { "Nome": "Equações de 1º Grau - Regras", "Link": "https://drive.google.com/file/d/13CRTTCpjc9VUcyyoNfT6BL8zC0tWbn45/view?usp=share_link" },
  { "Nome": "Outra lista teste", "Link": "https://1drv.ms/b/s!AjBtu5iXnoGYcalawiuq2FGJofI?e=rVfNT7" }],
  "Exercicios": [
    { "Enunciado": "Qual é a solução da equação 3x + 4 = 10?", "Alternativas": ["a) x = 2", "b) x = 3", "c) x = 4", "d) x = 5"], "Gabarito": "a) x = 2" },
    { "Enunciado": "Qual é a solução da equação 2x + 5 = 3x - 1?", "Alternativas": ["a) x = 6", "b) x = 6", "c) x = -6", "d) x = -7"], "Gabarito": "b) x = 7", "Resolução": "Para resolver a equação 2x + 5 = 3x - 1, precisamos encontrar o valor de x que satisfaz a equação. Para isso, podemos seguir os seguintes passos:\n\n1. Isolar o termo com x em um lado da equação. Podemos fazer isso subtraindo 2x de ambos os lados da equação, o que nos dá:\n\n   2x + 5 - 2x = 3x - 1 - 2x\n\n   Simplificando, temos:\n\n   5 = x - 1\n\n2. Isolar x no lado direito da equação. Podemos fazer isso adicionando 1 a ambos os lados da equação, o que nos dá:\n\n   5 + 1 = x - 1 + 1\n\n   Simplificando, temos:\n\n   6 = x\n\nPortanto, a solução da equação 2x + 5 = 3x - 1 é x = 6. Podemos verificar que isso é verdadeiro substituindo x = 6 na equação original:\n\n   2(6) + 5 = 3(6) - 1\n\n   12 + 5 = 18 - 1\n\n   17 = 17\n\n   Como a igualdade é verdadeira, a solução x = 6 é válida." },
    { "Enunciado": "Uma loja de eletrônicos oferece um desconto de R$ 50,00 em todos os smartphones à venda. Se o preço original de um smartphone é de R$ 900,00, qual é o preço com o desconto?", "Alternativas": ["a) R$ 850,00", "b) R$ 860,00", "c) R$ 870,00", "d) R$ 880,00"], "Gabarito": "a) R$ 850,00" },
    { "Enunciado": "Um pintor cobra R$ 35,00 por hora para pintar paredes. Ele foi contratado para pintar duas paredes de um cômodo, uma medindo 4 metros de largura por 3 metros de altura e outra medindo 3 metros de largura por 3 metros de altura. Se ele leva em média 4 horas para pintar cada parede, qual é o valor total que ele vai cobrar pelo trabalho?", "Alternativas": ["a) R$ 420,00", "b) R$ 440,00", "c) R$ 460,00", "d) R$ 480,00"], "Gabarito": "d) R$ 480,00" },
  ]
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login base={firebase} />
  },
  {
    path: "/Home",
    element: <Home data={data} base={firebase} />
  },
  {
    path: "/Quiz",
    element: <Quiz questions={questions} data={data} base={firebase} />
  },
  {
    path: "/Disciplinas",
    element: <Disciplinas data={data} base={firebase} />
  },
  {
    path: "/Disciplina",
    element: <Disciplina data={data} base={firebase} />
  },
  {
    path: "/Conteudo",
    element: <Conteudo data={data3} user={data} base={firebase} />
  },
  {
    path: "Perfil",
    element: <PerfilConfig base={firebase} />
  },
  {
    path: "Eventos",
    element: <Eventos base={firebase} />
  },
  {
    path: "Biblioteca",
    element: <Biblioteca base={firebase} />
  },
  {
    path: "Configuracao",
    element: <Configurações base={firebase} />
  },
  {
    path: "Complete",
    element: <Complete base={firebase} />
  },
  {
    path: "/Dashboard",
    element: <Dashboard base={firebase} />
  },
  {
    path: "/Graphs",
    element: <Graphs base={firebase} />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
