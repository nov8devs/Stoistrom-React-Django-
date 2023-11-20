import { useHistory } from 'react-router-dom'

function JournalingPage() {

    return (
        <form>
            <input className="Prompt" type="text" name="prompt" />
            <input type="text" name="entry" />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default JournalingPage;