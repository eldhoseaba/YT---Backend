import { Server } from 'socket.io';
import http from 'http';

let io: Server;

export function setupSocket(server: http.Server): Server {
  io = new Server(server);

  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg: string) => {
      io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  return io;
}

export { io }; 

// Export the io instance