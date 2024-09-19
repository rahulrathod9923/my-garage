const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all origins (not recommended for production)
app.use(cors());

// Or, configure CORS for specific origins
// app.use(cors({
//     origin: 'http://localhost:3000'
// }));

app.use(express.json());

app.post('/customer/signup', (req, res) => {
    // Handle your signup logic here
    res.send('User registered successfully');
});

app.listen(9191, () => {
    console.log('Server listening on port 9191');
});
