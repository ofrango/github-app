'use strict'

import React, { PropTypes } from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const AppContent = ({ userinfo, repos, starred }) => (
  <div className='app container'>
    <Search />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions />}

    {!!repos.length &&
    <Repos
      className='repos'
      title='Repositórios'
      repos={repos} />}

    {!!starred.length &&
    <Repos
      className='starred'
      title='Favoritos'
      repos={starred} />}
  </div> 
)

AppContent.propTypes = {
  userinfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
