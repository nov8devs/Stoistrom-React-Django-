import { useNavigate } from "react-router-dom";

// import { useHistory } from 'react-router-dom'

function JournalingChoices() {
  const nav = useNavigate();
  const navigateToEmptyPage = () => {
    nav("/emptypage");
  };

  return (
    <div>
      <button onClick={navigateToEmptyPage}>Empty Page</button>
      <button>Random Prompt</button>
    </div>
  );
}

export default JournalingChoices;
