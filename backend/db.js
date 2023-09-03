// const mongoose = require('mongoose')
// // const mongoDbClient = require("mongodb").MongoClient
// const mongoURI = 'mongodb+srv://ecommerce:fooddelievery@cluster0.553uc.mongodb.net/';
// module.exports = function (callback) {
//     mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//         if (err) console.log("---" + err)
//         else {
//             // var database =
//             console.log("connected to mongo")
//             const foodCollection = await mongoose.connection.db.collection("food_items");
//             foodCollection.find({}).toArray(async function (err, data) {
//                 const categoryCollection = await mongoose.connection.db.collection("Categories");
//                 categoryCollection.find({}).toArray(async function (err, Catdata) {
//                     callback(err, data, Catdata);

//                 })
//             });
//             // listCollections({name: 'food_items'}).toArray(function (err, database) {
//             // });
//             //     module.exports.Collection = database;
//             // });
//         }
//     })
// };
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://ecommerce:hasdfghjkl@cluster0.553uc.mongodb.net/';

module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true })
        .then(() => {
            console.log("Connected to MongoDB");
            const fetchd_data = mongoose.connection.db.collection("food_items");
            // console.log(fetchd_data);
            return mongoose.connection.db.collection("food_items").find({}).toArray();
        })
        .then(data => {
            // console.log(data);
            return mongoose.connection.db.collection("foodCategory").find({}).toArray()
                .then(Catdata => {
                    // console.log(Catdata);
                    callback(null, data, Catdata);
                });
        })
        .catch(err => {
            console.error("Error connecting to MongoDB:", err);
            callback(err);
        });
};
