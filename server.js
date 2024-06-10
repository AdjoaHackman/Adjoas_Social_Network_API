const express = require('express');
// const mongodb = require('mongodb');
const routes = require('./routes/api')
const mongoose = require('./config/connection')
//how do I call line 4 along with mongodb?

const app = express();
const PORT = process.env.PORT || 3001

//test db being used on line 8, it doesn't exist, mongo will create a db
const connectionString = "mongodb://localhost:27017/social_db"

app.use(express.json());
app.use(routes);

// mongodb.MongoClient.connect(
//     connectionString,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     },
//     (err, client) => {
//         if (err) {
//             console.error(err);
//         } else {
//             const database = client.db();

//             app.listen(PORT, () => {
//                 console.log(`Server started on port ${PORT}`);
//             });
//         }
//     },
// );

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});