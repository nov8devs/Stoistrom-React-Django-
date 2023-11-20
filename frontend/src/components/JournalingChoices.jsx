import { useHistory } from 'react-router-dom'

function JournalingChoices() {
    const history = useHistory()

    const navigateToEmptyPage = () =>{
        history.push('/journal')
    }

    return (
        <div>
            <button onClick={navigateToEmptyPage}>Empty Page</button>
            <button>Random Prompt</button>
        </div>
    )
}


export default JournalingChoices;
