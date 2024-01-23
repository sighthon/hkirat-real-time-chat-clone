import { UserId } from "./store/store"

export interface User {
    id: UserId;
    name: string;
}

export interface Room {
    users: User[]
}

export class UserManager {
    private rooms: Map<string, Room>;

    constructor() {
        this.rooms = new Map<string, Room>();
    }

    addUser(userId: UserId, roomId: string, socket: WebSocket) {
        if (!this.rooms.get(roomId)) {
            this.rooms.set(roomId, {
                users: []
            });
        }

        this.rooms.get(roomId)?.users.push({
            id: userId,
            name
        });
    }

    removeUser(userId: UserId, roomId: string) {
        const users = this.rooms.get(roomId)?.users;
        if (users) {
            users.filter(u => u.id !== userId);
        }
    }
}