Requesting/Receiving Data:

To request data, make an HTTP GET request to the specified endpoint on which the microservice is listening. For example, here a GET request is made from the backend of the app using Fetch API to localhost:4000/quote, where the microservice is listening for requests. The microservice then makes a GET request to the random quote API and sends the received quote object to the /quote endpoint, fullfilling the orginal GET request.

async function retrieveQuote() {
    try {
        const response = await fetch(('http://localhost:4000/quote'))
        const quote = await response.json()
        return quote
    }
    catch(error) {
      console.error(error)
    }}

app.get('/quote', (req,res) => { 
    retrieveQuote().then(quote => res.send(quote))
    })

 Once the quote is received on the backend, another GET request is made to the port on which the backend is running with endpoint /quote so that the quote can then be accessed by the frontend and displayed.

UML Sequence Diagram
![UML](https://github.com/kaelinn/Microservice/assets/114119985/df281b4d-ba65-4538-9636-b3481ed678dd)
