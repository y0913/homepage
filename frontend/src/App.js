import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <Router>
      <Container>
        <main className='py-3'>
          <Route path='/' component={HomeScreen} exact />
        </main>
      </Container>
    </Router>
  )
}

export default App
