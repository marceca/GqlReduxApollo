let express = require('express');
let app = express();
// GraphQL
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
// Mongoose
const mongoose = require('mongoose');

const cors = require('cors');

// Allow cross origin requests
app.use(cors())



mongoose.connect('mongodb://mike:pass1234@ds137720.mlab.com:37720/gql', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to db')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))


app.listen(3000,() => {console.log('listening on port 3000')});