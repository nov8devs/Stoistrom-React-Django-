import { useState } from 'react'
import JournalingChoices from './JournalingChoices.jsx'

function Home() {
  
    const [showJournal, setShowJournal] = useState(false)
  
    const toggleJournal = () => {
      setShowJournal(!showJournal)
    }
  
    return (
      <div>
        <h1>Welcome to Stoistrom!</h1>
        <button onClick={toggleJournal}>Start Journal!</button>
        {showJournal && <JournalingChoices />}
      </div>
    )
}

export default Home;