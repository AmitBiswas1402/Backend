import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [tournaments, setTournaments] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/api/tournaments')
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
    <p>Tournaments: {tournaments.length}</p>

    {
      tournaments.map((tournaments, country)=>{
        <div key={tournaments.country}>
          <h3>{tournaments.league}</h3>
          <p>{tournaments.domesticCup}</p>
        </div>
      })
    }

    </>
  )
}

export default App
