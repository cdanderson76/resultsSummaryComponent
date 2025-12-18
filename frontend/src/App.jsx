import { useEffect } from "react"
import dotenv from 'dotenv';

function App() {

  return (
    <div className="canvas">
      <ResultContainer />
      <div className="summary-container">
      
      </div>
    </div>
  )
}

function ResultContainer() {

  return(
    <div className="result-container">
      <ResultList />
    </div>
  )
}

function ResultList() {

  const URL = `${import.meta.env.VITE_HOST}/api/results/`

  async function fetchResults() {
    const resp = await fetch(`${import.meta.env.VITE_HOST}/api/results/`);
    const data = await resp.json();
    console.log(data);
  }

  useEffect(() => {
    fetchResults();
  }, [])

  return (
    <div></div>
  )
}

export default App
