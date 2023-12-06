// This is where all the API endpoints are handled (using a REST framework)
// I made sure to put them all in one file to make frontend dev and backend dev a lot easier!

DOMAIN = 'BACKEND_SERVER' // Put the server to your backend here!

const endpoints = {
    getJournal: `${DOMAIN}/api/journal`,
    journal: `${DOMAIN}/api/create_journal/`,
    journalPage: `${DOMAIN}/api/create_journal_page/`,

    handleApiResponse(endpoint, data, method = "POST", handleOk = () => {}, handleError = () => {}) {
        console.log("Sender's Data: ", data)

        const requestOptions = {
            method: method,
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
    }
};

export default endpoints;