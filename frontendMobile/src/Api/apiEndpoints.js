// This is where all the API endpoints are handled (using a REST framework)
// I made sure to put them all in one file to make frontend dev and backend dev communication a lot easier!

DOMAIN = 'http://192.168.254.26:8000' // Put the server to your backend here!

const endpoints = {
    getJournal: `${DOMAIN}/api/journal`,
    getJournalPage: `${DOMAIN}/api/journal_page`,
    deleteJournal: `${DOMAIN}/api/delete_journal`,
    journal: `${DOMAIN}/api/create_journal/`,
    journalPage: `${DOMAIN}/api/create_journal_page/`,

    postApiResponse(endpoint, data, handleOk = () => {}, handleError = () => {}) {
        console.log("Sender's Data: ", data)

        const requestOptions = {
            method: "POST",
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        fetch(endpoint, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(` ${ data.data }`)
                }
                return response.json()})
            .then((responseData) => {console.log(responseData);
                if (responseData) {
                    handleOk(responseData);
                } else {
                    console.warn("Response data does not have any properties:", responseData);
                    handleError();
                }
            })
            .catch((error) => {console.error("Error during fetch: ", error); 
                handleError();
            });
    },

    async getAPIResponse(endpoint, setData) {
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },

    deleteApiResponse(endpoint, deleteId) {
        const requestOptions = {
            method: "DELETE",
            headers: {
            'Content-Type': 'application/json',
            },
        };   

        const specEndpoint = `${endpoint}/${deleteId}`;
        fetch(specEndpoint, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                console.log('Deletion successful');
            })
            .then(data => {
                console.log('Data:', data);
            })
            .catch(error => {
                console.error('Error deleting data:', error);
            });

    },

};

export default endpoints;