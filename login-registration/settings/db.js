const mongoose = require("mongoose")

const linkDatabase = async () => {

    try{
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB connect ho gaya bhai')
    }

    catch(error)
    {
        console.log(error.message)
    }
}

module.exports = linkDatabase

// const scores = { userId: 'abc', password: '123', score: 100 };
// scores.insertOne(score, (err, result) => {
//   if (err) {
//     console.error('Error inserting score:', err);
//     return;
//   }
//   console.log('Score inserted successfully');
// });

// const scoreMedium = { userId: 'abc', password: '123', score: 100 };
// scores.insertOne(score, (err, result) => {
//   if (err) {
//     console.error('Error inserting score:', err);
//     return;
//   }
//   console.log('Score inserted successfully');
// });

// const scoreHard = { userId: 'abc', password: '123', score: 100 };
// scores.insertOne(score, (err, result) => {
//   if (err) {
//     console.error('Error inserting score:', err);
//     return;
//   }
//   console.log('Score inserted successfully');
// });
