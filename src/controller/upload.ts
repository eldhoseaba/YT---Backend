import { Request, Response } from 'express';
import { io } from '../services/socketSetup';

export function sendMessage(req: Request, res: Response): void {
    const { message } = req.body;
    // Handle the message
    console.log("hai stream ...!! ");
    
    // Emit the message to all clients using Socket.IO
    io.emit('chat message', message);

    res.status(200).json({ success: true });
}
