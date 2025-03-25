import React from 'react'
import './App.css'
import ServiceCard from './components/ServiceCard'
function App() {
  

  return (
    <div>
      <ServiceCard
      title = 'Web Development'
      description = 'This is a Web Development app' />

<ServiceCard
      title = "Graphic Designing"
      description = 'This is all about Graphic designing' />
    </div>
  )
}

export default App;
