const mongoose = require('mongoose')
const url = 'mongodb+srv://jungin:jungin@cluster0.ryibh.mongodb.net/<studentDB>?retryWrites=true&w=majority';

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to MongoDb Atlas ')
    })
    .catch( (err) => {
        console.error('Error connecting to MongoDb Atlas. \n${err}');
    })