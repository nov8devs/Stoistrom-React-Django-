import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import EmptyPrompt from './components/JournalingPages/EmptyPrompt'
import RandomPrompt from "./components/JournalingPages/RandomPrompt"
import MyJournals from './components/MyJournals'

// App routing is accessed here
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/myjournals" Component={MyJournals} />
        <Route path="/journal/0/:journalId" Component={EmptyPrompt} />
        <Route path="/journal/1/:journalId" Component={RandomPrompt}/>
      </Routes>
    </div>
  )
}

export default App;
