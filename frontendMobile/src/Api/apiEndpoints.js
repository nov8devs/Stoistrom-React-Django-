// This is where all the API endpoints are handled (using a REST framework)
// I made sure to put them all in one file to make frontend dev and backend dev a lot easier!

const endpoints = {
    journal: 'http://127.0.0.1:8000/api/journal/',
    journalPage: 'http://127.0.0.1:8000/api/journal_page/',

    createRequest(data, method = 'POST') {
        return {
            method: method,
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    },

    handleApiResponse(endpoint, data, method, handleOk = () => {}, handleError = () => {}) {
        const requestOptions = this.createRequest(endpoint, data, method);

        fetch(endpoints[endpoint], requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Response is not ok!")
            }
            return response.json()})
            .then((responseData) => {console.log(responseData);
              handleOk();
            })
            .catch((error) => {console.error("Error during fetch: ", error); 
              handleError();
            });
    }
}

export default endpoints;