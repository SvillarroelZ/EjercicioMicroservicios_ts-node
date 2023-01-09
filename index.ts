require("dotenv").config();
import express from 'express';
import dbConnect from './src/config/mongo';

import clientRoutes from './src/routes/client.routes';
import ClientController from './src/controllers/client.controller';

import accountRoutes from './src/routes/account.routes';
import { createAccountController } from './src/controllers/account.controller';

const app : express.Application = express();
const PORT = process.env.PORT || 4200;

dbConnect();

// app.get('/', (req, res)=> {
//     res.send('Hello world')
// })
app.get('/clients', ClientController.findAll);
app.get('/account', createAccountController);

app.use(express.json());

app.use('/clients', clientRoutes);
app.use('/accounts', accountRoutes);

app.listen(PORT, () => console.log(`The app is ready for use through: http://localhost:${PORT}`));
