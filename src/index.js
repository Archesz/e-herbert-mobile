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
    text: "Um retângulo tem lados medindo 12 cm e 16 cm. Um triângulo equilátero tem um lado de comprimento igual ao menor lado desse retângulo. Calcule a área da região em que o triângulo se sobrepõe ao retângulo.",
    options: ["8√3 cm²", "12√3 cm²", "16√3 cm²", "24√3 cm²", "32√3 cm²"],
    answer: "12√3 cm²"
  },
  {
    text:
      'Um pesquisador está estudando a diversidade de espécies de um ecossistema em diferentes níveis tróficos. Ele coletou amostras de água em um lago e identificou os organismos presentes em cada nível trófico. No primeiro nível, encontrou organismos produtores, no segundo nível, organismos herbívoros e no terceiro nível, organismos carnívoros. Ele observou que havia menos espécies de organismos nos níveis tróficos mais elevados. Qual é a principal razão para essa redução na diversidade de espécies nos níveis tróficos mais altos?',
    options: [
      "Os organismos carnívoros são maiores e mais agressivos, o que torna mais difícil para outras espécies compartilhar o mesmo espaço.",
      "A biomassa disponível é menor nos níveis tróficos mais elevados, o que limita a quantidade de organismos que podem sobreviver.",
      "Os organismos herbívoros são capazes de se alimentar de uma variedade maior de espécies do que os carnívoros, o que leva a uma maior diversidade de espécies em níveis tróficos inferiores.",
      "Os organismos carnívoros são mais propensos a sofrer com doenças e parasitas, o que reduz a diversidade de espécies em níveis tróficos mais altos.",
      "Os organismos produtores são mais eficientes em competir por recursos, o que leva a uma redução na diversidade de espécies nos níveis tróficos superiores."
    ],
    answer: 'A biomassa disponível é menor nos níveis tróficos mais elevados, o que limita a quantidade de organismos que podem sobreviver.',
  },
  {
    text:
      'O relevo submarino é marcado por uma grande variedade de formas e estruturas. Entre essas formas, destacam-se as plataformas continentais, que são áreas rasas que se estendem desde a costa até uma profundidade média de 200 metros. Essas áreas são importantes para a vida marinha e para a exploração de recursos naturais, como petróleo e gás. Em que tipo de borda de placa tectônica é mais comum encontrar plataformas continentais?',
    options: [
      "Convergente",
      "Divergente",
      "Transformante",
      "Conservativa",
      "Inativa"
    ],
    answer: 'Convergente',
  },
  {
    text:
      'Um objeto de massa m é colocado em uma superfície plana e horizontal com um coeficiente de atrito estático μ. Uma força horizontal F é aplicada ao objeto, mas este não se move. Qual é o valor máximo da força F que pode ser aplicada sem que o objeto comece a se mover?',
    options: [
      "F = μmg",
      "F = 2μmg",
      "F = 3μmg",
      "F = 4μmg",
      "F = 5μmg"
    ],
    answer: 'F = μmg',
  },
  {
    text:
      'Uma urna contém 5 bolas vermelhas e 7 bolas brancas. Duas bolas são retiradas simultaneamente da urna, sem reposição. Qual é a probabilidade de que as duas bolas sejam da mesma cor?',
    options: [
      "5/33",
      "7/33",
      "10/33",
      "12/33",
      "14/33",
    ],
    answer:
      '12/33',
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
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
