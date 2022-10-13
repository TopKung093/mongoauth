const app = express();
const express = require ('express');
const routes = require('./routes/routes');
require('dotenv').config();

app.use(express.json());
app.use('/api', routes);

const {PORT}= process.env;
const port = process.env.PORT || PORT;


server.listen(port, () => {
    console.log(`Server on port', ${port}`);
})