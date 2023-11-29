import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dateTimeFormat from "./custom_files/date_format";

function MyJournals() {
    const nav = useNavigate();
    const navHome = () => {
      nav('/');
    }

    function getJournalType(code) {
        switch (code) {
          case '0':
            return 'Empty Page';
          case '1':
            return 'Random Prompt';
          default:
            return 'Unknown Type';
        }
      }

    const [journals, setJournals] = useState([])
    const [error, setError] = useState('')

    useState(() => {
        const fetchJournals = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/list_journals/');
                if (!response.ok) {
                  throw new Error('Failed to fetch journals');
                }

                const data = await response.json();
                setJournals(data);
            } catch (error) {
                setError("Error: " + error.message);
            }
        }

        fetchJournals();
    }, [])

    return (
        <div>
            <div id="Journals">
                <p>Viewing Journals go Here!</p>
                <ul>
                    {journals.map((journal) => (
                        <li key={journal.id}>
                            <h1>{getJournalType(journal.journal_type)}</h1>
                            <p>Date Created: {dateTimeFormat(journal.date_started)}</p>
                            <button>View Content</button>
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={navHome}>Go Back Home</button>
        </div>
    );
}

export default MyJournals;