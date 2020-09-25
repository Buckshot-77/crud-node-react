const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app')

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
}).then(() => console.log(`DB Connection successful`));

const port = 3001;

app.listen(port, () => console.log(`App listening on port ${port} 😁`));