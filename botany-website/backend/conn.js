// mongodb+srv://yasinh408:<password>@cluster0.afj7uoo.mongodb.net/?retryWrites=true&w=majority


const { MongoClient } = require("mongodb");
const db = "mongodb+srv://yasinh408:Yasseryahya1!@cluster0.afj7uoo.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            //verify db is connected to
            if (db) {
                _db = db.db("MainDB"); //if users table is available
                console.log("Successfully connected to MongoDB")

            }
            return callback(err);

            

        });
    },

    getDB: function () {
        return _db;
    },

};