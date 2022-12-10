import express from 'express'; // need to add "type": "module" to package.json for this to work.
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 3005;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.listen(
  PORT,
  console.log(`Server is running on port: http://localhost:${PORT}`)
);
