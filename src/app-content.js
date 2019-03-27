'use strict'

import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const AppContent = () => (
  <div className='app container'>
    <Search />
    <UserInfo />
    <Actions />

    <Repos
      className='repos'
      title='Repositórios'
      repos={[{
        name: 'Nome do repo',
        link: '#'
      }]} />

    <Repos
      className='starred'
      title='Favoritos'
      repos={[{
        name: 'Nome do repo',
        link: '#'
      }]} />
  </div>
)

export default AppContent
