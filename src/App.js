import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './components/SearchForm';
import Suggestion from './components/Suggestion';
import {useState} from 'react'


function App() {

  let [activity, setActivity]  = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <h1>I'm bored!</h1>
        <h3>Find me something to do...</h3> 
      </header>
      <SearchForm setResult={setActivity}></SearchForm>
      {activity && <Suggestion activity={activity} ></Suggestion>}
    </div>
  );
}

export default App;
