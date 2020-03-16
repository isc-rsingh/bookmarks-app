import React from 'react'
import { Router } from '@reach/router'
import Nav from './components/Nav'
import NewBookmark from './pages/NewBookmark'
import Bookmarks from './pages/Bookmarks'

function App() {
  const navLinks = [
    {
      text: 'Bookmarks', 
      path: '/bookmarks'
    }, 
    {
      text: 'New', 
      path: '/new'
    }
  ]

  return (
    <div className="App">
      <Nav navLinks = { navLinks } />
      <div className="spacer" />
      <Router>
        <NewBookmark path="/new" />
        <Bookmarks path="/bookmarks" />
      </Router>
    </div>
  );
}

export default App
