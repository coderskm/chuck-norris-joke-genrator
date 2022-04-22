import './App.css';
import { useState } from 'react'
import axios from 'axios';
function App() {
  const [fact, setFact] = useState(" ");
   function getFact()
  {
     axios.get("https://api.chucknorris.io/jokes/random")
       .then((response) => {
         setFact(response.data.value);
     })
    
  }
  return (
    <div className="App">
      <button type="button" onClick={getFact} className='btn'>
        New Fact
      </button>
      <h1 className='container'>{fact}</h1>
    </div>
  );
}

export default App;
