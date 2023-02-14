import { Server } from "socket.io";
import messageHandler from "./../../services/sockets/messageHandler";

export default function SocketHandler(req: any, res: any) {
    // It means that socket server was already initialised
    if (res.socket.server.io) {
        console.log("Socket already set up!");
        res.end();
        return;
    }

    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    const onConnection = (socket: any) => {
        messageHandler(io, socket);
    };

    // Define actions inside
    io.on("connection", onConnection);



    console.log("Setting up socket!");
    res.end();
}