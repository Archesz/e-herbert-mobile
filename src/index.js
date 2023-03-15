import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './styles/global.scss'
import Home from './pages/Home';
import Quiz from './pages/Quiz';

const data = {
  "Nome": "João Vitor",
  "Apelido": "Jovi",
  "URLFoto": "https://pps.whatsapp.net/v/t61.24694-24/323807984_895529844989283_6961357159995897617_n.jpg?ccb=11-4&oh=01_AdSFbbfMfGtSFeq0w2QwhKvHSLkJ2YCWfIWubdhqTvvwnQ&oe=641E400D"
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
