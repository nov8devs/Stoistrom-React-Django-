import { useState } from 'react';

function JournalingPage() {
    const [formData, setFormData] = useState({
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
            .then((data) => console.log(data))
            .catch((error) => {console.error("Error during fetch: ", error)});
    }

    return (
        <form onSubmit={handleSubmit} method="post">
            <input type="text" name="prompt"
            value={formData.prompt}
            onChange={handleChange} />

            <textarea name="entry"
            value={formData.entry}
            onChange={handleChange} />

            <button type="submit">Submit</button>
        </form>
    )
}

export default JournalingPage;