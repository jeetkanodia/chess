import { WebSocket } from "ws";

export class GameManager {
  private games: Game[];

  constructor() {
    this.games = [];
  }

  addUser(socket: WebSocket) {}
  removeUser(socket: WebSocket) {}
  private handleMessage() {}
}

// 25:43
