'use strict'

import React from 'react'

const App = () => (
  
  <div className='app container'>
    <div className='search'>
      <input type='search' placeholder='Digite o nome do usuário no GitHub' />
    </div>

    <div className='user-info'>
      <img src='https://avatars2.githubusercontent.com/u/487669?v=4' />
      <h1 className='username'><a href='https://github.com/fdaciuk'>Fernando Daciuk</a></h1>
    </div>

    <ul className='repos-info'>
      <li>- Repositorios:122</li>
      <li>- Seguidores:10 </li>
      <li>- Seguindo: 10</li>
    </ul>

    <div className='actions'>
      <button>Ver Repositorios</button>
      <button>Ver favoritos</button>
    </div>

    <div className='repos'>
      <h2>Repositórios</h2>
      <ul>
       <li><a href='#'>Nome do Repositório</a></li> 
       <li><a href='#'>Nome do Repositório</a></li> 
      </ul>
    </div>
    <div className='starred'>
      <h2>Favoritos</h2>
      <ul>
        <li><a href='#'>Nome do Repositório</a></li>
        <li><a href='#'>Nome do Repositório</a></li> 
      </ul>
    </div>
  </div>
)

export default App
