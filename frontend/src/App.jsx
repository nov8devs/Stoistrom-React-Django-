import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import JournalingPage from './components/JournalingPage'

// App routing is accessed here
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/emptypage" Component={JournalingPage} />
      </Routes>
    </div>
  )
}

export default App;
