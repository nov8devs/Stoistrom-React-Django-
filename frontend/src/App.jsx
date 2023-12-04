import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import EmptyPrompt from './components/JournalingPages/EmptyPrompt'
import RandomPrompt from "./components/JournalingPages/RandomPrompt"
import MyJournals from './components/MyJournals'
import SavedJournal from './components/custom_files/SavedJournal'

// App routing is accessed here
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/myjournals" Component={MyJournals} />
        <Route path="/save_journal" Component={SavedJournal} />
        <Route path="/journal/1/:journalId" Component={EmptyPrompt} />
        <Route path="/journal/2/:journalId" Component={RandomPrompt}/>
      </Routes>
    </div>
  )
}

export default App;
