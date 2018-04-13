let express = require("express");

import AdultRoutes from './routes/AdultRoutes';
import ChildRoutes from './routes/ChildRoutes';
import AdolescentRoutes from './routes/AdolescentRoutes';
import InfantRoutes from './routes/InfantRoutes';

const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

let mongoose = require('mongoose');

mongoose.connect("mongodb://markhinojosa:12345@ds261678.mlab.com:61678/seed-entries");
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
app.use('/api', router);
app.use(bodyParser.json());
app.use(AdultRoutes);
app.use(ChildRoutes);
app.use(AdolescentRoutes);
app.use(InfantRoutes);

app.get('/contacts', (request,response,next) => {
  response.json(contacts)
 });
 

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
