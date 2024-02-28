import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import connectDB from './DB/connection/connection';
import bodyParser from 'body-parser';
import cors from 'cors';
import AuthRouter from './router/authRouter';
import adminRouter from './router/adminRouter';
import {setupSocket} from './services/socketSetup'; // Import the io instance

dotenv.config();
const app = express();

const server = http.createServer(app);
const io = setupSocket(server); // Call the function to set up Socket.IO

connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

app.use('/api/auth', AuthRouter);
app.use('/api/admin', adminRouter);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Application started on port ${PORT}!`));
