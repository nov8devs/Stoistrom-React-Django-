import { useNavigate } from "react-router-dom";

// import { useHistory } from 'react-router-dom'

function JournalingChoices() {
  // const history = useHistory()
  const nav = useNavigate();
  const navigateToEmptyPage = () => {
    // history.push('/journal')
    nav("/journal");
  };

  return (
    <div>
      <button onClick={navigateToEmptyPage}>Empty Page</button>
      <button>Random Prompt</button>
    </div>
  );
}

export default JournalingChoices;
