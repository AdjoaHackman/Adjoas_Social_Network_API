const express = require('express');
const mongodb = require('mongodb');

const app = new express();
const port = process.env.PORT || 3001

//test db being used on line 8, it doesn't exist, mongo will create a db
const connectionString = "mongodb://localhost:27017/social_db"

app.use(express.json());
app.use('/', mainRouter);

mongodb.MongoClient.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) {
            console.error(err);
        } else {
            const database = client.db();

            app.listen(port, () => {
                console.log(`Server started on port ${port}`);
            });
        }
    },
);

