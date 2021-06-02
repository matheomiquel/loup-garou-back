
import { Bdd } from '../../data';
import { Express, Request, Response } from "express"
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  // ...
});
export class UserRoute {
  private readonly httpServer: any
  private readonly io: Server
  private readonly app: Express
  private readonly bdd: Bdd
  private path: string = "/user"
  constructor(p: { app: Express, bdd: Bdd, io: Server }) {
    this.httpServer = createServer()
    this.io = new Server(httpServer);
    this.app = p.app
    this.bdd = p.bdd
    this.app.get(`${this.path}`, this.read.bind(this))
    this.app.post(`${this.path}`, this.connection.bind(this))
  }
  async read(req: Request, res: Response): Promise<void> {
    const user = await this.bdd.getNumberCharacter(this.bdd)
    res.json(user)
  }

  async connection(req: Request, res: Response): Promise<Response> {
    const user = await this.bdd.login(this.bdd, req.body.username, req.body.id)
    this.io.to(req.body.id).emit("id", req.body.id)
    return res.json(user);
  }
}