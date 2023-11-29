import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

function EmptyPrompt() {
    // For navigation
    const nav = useNavigate();
    const navHome = () => {
      nav('/');
    }

    const { journalId } = useParams();

    const [formData, setFormData] = useState({
        journal_id: journalId,
        prompt: '',
        entry: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    // Performs the POST request to Django REST backend
    const [error, setError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }

        fetch('http://127.0.0.1:8000/api/create/', requestOptions)
            .then((response) => {
                if (response.ok === false) {
                    throw new Error("Response is not ok!")
                }
                return response.json()})
                .then((data) => {console.log(data);
                  setError('Successfully saved page to journal!')})
                .catch((error) => {console.error("Error during fetch: ", error); 
                  setError('Sorry. Server had a bad request!')});
        }


    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} method="post">
            <label htmlFor='prompt'>Prompt: </label>
            <input type="text" id="prompt" name="prompt"
            value={formData.prompt}
            onChange={handleChange} /><br/>
            
            <label htmlFor='entry'>Entry: </label>
            <textarea name="entry" id="entry"
            value={formData.entry}
            onChange={handleChange} /><br/>

            <button type="submit">Submit</button>
          </form>
          <button onClick={navHome}>Go Back Home</button>
        </div>
    )
}

export default EmptyPrompt;