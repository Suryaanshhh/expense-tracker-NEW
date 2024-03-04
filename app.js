const Express = require('express');

const bodyParser = require('body-parser');


const sq = require('./utility/database');

const cors = require('cors')

const expenseRoute=require('./routes/expenseRoutes');

const app = Express();

app.use(bodyParser.json({extended:false}))

app.use(cors());

app.use(expenseRoute);

sq.sync().then(result => console.log(result)).catch(err => console.log(err))


app.listen(3000);