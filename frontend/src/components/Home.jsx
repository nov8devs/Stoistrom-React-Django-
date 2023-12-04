import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import JournalingChoices from './JournalingChoices.jsx'

function Home() {
  const nav = useNavigate();
  const navMyJournals = () => {
    nav('/myjournals');
  }
  
    const [showJournal, setShowJournal] = useState(false)
  
    const toggleJournal = () => {
      setShowJournal(!showJournal)
    }
  
    return (
      <div>
        <h1>Welcome to Stoistrom!</h1>
        <button onClick={toggleJournal}>Start Journal!</button>
        <button onClick={navMyJournals}>View Old Journals</button>
        {showJournal && <JournalingChoices />}
      </div>
    )
}

export default Home;