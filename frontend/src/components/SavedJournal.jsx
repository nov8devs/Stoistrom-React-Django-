import { useNavigate } from "react-router-dom";

function SavedJournal() {
    const nav = useNavigate();
    const navHome = () => {
        nav('/');
    }
    const navMyJournals = () => {
        nav('/myjournals')
    }

    return (
        <div>
            <h1>Journal Saved!</h1>
            <p>--Journaling Details--</p>
            <button onClick={navMyJournals}>View Journals</button>
            <button onClick={navHome}>Go Back Home</button>
        </div>
    );
}

export default SavedJournal;