# Herbert Componentes

Esse repositório serve para armazenar os componentes para os projetos do Projeto Herbert de Souza.

## Tecnologias Usadas
- Interface
  - Javascript
  - React
  - Node
- Estilização
  - SCSS
  - Material UI
- Banco de Dados
  - Firebase
- Backend
  - Node

## Principais Dependências
- React Icons: Icones para a aplicação.

## Guia de Desenvolvimento:

### Criando o projeto

1. Comece iniciando o projeto React com `npx create-react-app nome`.
2. Instale as bibliotecas iniciais: `yarn add react-icons sass @mui/material @emotion/react @emotion/styled`.
3. Na pasta src, deixe apenas os arquivos "App.js", "index.js".
   1. Em App.js, exclua as importações.
   2. Em index.js, exclua "reportWebVitals();".
4. Crie as seguintes pastas: "styles", "components", "assets".
- styles: Manter os arquivos de estilização globais e de páginas.
- components: Manter os componentes próprios.
- assets: Manter as imagens.
5. Na pasta public, exclua os arquivos .png

### Criação de Componentes:

Cada componente deve ser criado em uma pasta com o nome do componente. A pasta deve contem pelo menos um arquivo .jsx e um arquivo .scss.

Cada componente deve, dentro do seu próprio arquivo, ser capaz de realizar sua funcionalidade e sua estilização deve ser responsiva.

É também para ter um arquivo .MD dentro de cada arquivo explicando ele.