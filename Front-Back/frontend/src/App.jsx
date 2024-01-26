import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [football, setTournaments] = useState([])

  useEffect(()=>{
    axios.get('/api/football')
    .then((response)=>{
      setTournaments(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
    <h1>Full Stack</h1>
    <p>European Football Nations: {football.length}</p>

    {
      football.map((football, country)=>(
        <div key={football.country}>
          <h2>{football.country}</h2>
          <p>{football.league}</p>
          <p>{football.domesticCup}</p>
          <p>{football.leagueCup}</p>
          <p>{football.superCup}</p>
        </div>
      ))
    }

    </>
  )
}

export default App
