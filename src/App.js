import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './components/SearchForm';
import Suggestion from './components/Suggestion';
import {useState} from 'react'


import Tracker from '@openreplay/tracker';
import trackerFetch from '@openreplay/tracker-fetch'

const tracker = new Tracker({
  projectKey: "kkS0AG81LDQZ5dGTnTGN",  
});
const fetch = tracker.use(trackerFetch({
  sanitiser: (data) => {
    data.url = data.url.replace(/phonenumber=([0-9]+)/, "phonenumber=XXXX")
    return data
  }
}))
tracker.start();

function App() {

  let [activity, setActivity]  = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find me something!</h1>
        <h3>Give me a plan...</h3> 
      </header>
      <SearchForm setResult={setActivity} fetcher={fetch}></SearchForm>
      {activity && <Suggestion activity={activity} ></Suggestion>}
    </div>
  );
}

export default App;


