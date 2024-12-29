import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes').then((response) => {
      setJokes(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <div>
      <h1>Jokes from backend</h1>
      <p>{jokes?.length}</p>
      {jokes?.map((joke) => {
        return (
          <div key={joke.id}>
            <p>{joke.joke}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App