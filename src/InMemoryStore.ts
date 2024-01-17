import { UserId, Chat, Store } from "./store/store";
let globalChatId = 0;

export interface Room {
    roomId: string;
    chats: Chat[];
}

export class InMemoryStore implements Store {

    private store: Map<string, Room>

    constructor() {
        this.store = new Map<string, Room>();
    }

    initRoom(roomId: string) {
        this.store.set(roomId, { roomId, chats: [] });
    }

    getChats(roomId: string, limit: number, offset: number) {
        const room = this.store.get(roomId);
        if (!room) {
            return [];
        }
        return room.chats.reverse().slice(0, offset + 1).slice(-1 * limit)
    }

    addChat(userId: UserId, roomId: string, name: string, message: string) {
        const room = this.store.get(roomId);
        if (!room) {
            return;
        }
        room.chats.push({
            id: (globalChatId++).toString(),
            userId,
            name,
            message,
            upvotes: []
        }
        )
    }

    upvote(upvoterId: UserId, roomId: string, chatId: string) {
        const room = this.store.get(roomId);
        if (!room) {
            return;
        }
        const chat = room.chats.find(c => c.id === chatId);
        if (chat) {
            chat.upvotes.push(upvoterId);
        }

    }
}

