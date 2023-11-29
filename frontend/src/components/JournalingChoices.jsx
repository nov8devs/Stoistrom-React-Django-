import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function JournalingChoices() {
  const nav = useNavigate();

  const [error, setError] = useState('')
  const navigateToJournal = (type) => (e) => {
    e.preventDefault();
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        journal_type: type,
      }),
    };
  
    fetch('http://127.0.0.1:8000/api/create_journal/', requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Response is not ok!');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        nav(`/journal/${type}/${data.id}`);
      })
      .catch((error) => {
        console.error("Error during fetch: ", error);
        setError('Sorry. Server had a bad request!');
      });
  };

  return (
    <div>
      <button onClick={navigateToJournal('0')}>Empty Page</button>
      <button onClick={navigateToJournal('1')}>Random Prompt</button>
    </div>
  );
}

export default JournalingChoices;
