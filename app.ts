import { Initialisation } from "./route/route"
//import fastify, { FastifyBodyParser, FastifyReply, FastifyRequest } from 'fastify'
import Express from "express"
import { UserRoute, RoomRoute } from "./api/routes"
import { Bdd } from "./data"
import cors from "cors"
import { createServer } from "http";
import { Server } from "socket.io";
import { GameRoute } from "./api/routes"
export class Main {
  private app = Express();
  private readonly bdd = new Bdd()
  private readonly httpServer = createServer(this.app)
  private readonly io = new Server(this.httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"]
    },
  });
  public id: string = ""
  start(): Promise<Boolean> {
    const port = process.env.PORT || 3000
    this.app.use(Express.json())
    this.app.use(cors())
    const bdd = new Bdd()
    this.httpServer.listen(port, function () {
      console.log('Votre app est disponible sur localhost:3000 !')
    })
    const userRoute = new UserRoute({ app: this.app, bdd: this.bdd, io: this.io });
    const roomRoute = new RoomRoute({ app: this.app, bdd: this.bdd, io: this.io });
    const gemaRoom = new GameRoute({ app: this.app, bdd: this.bdd, io: this.io });

    this.app.get('/', function (req, res) {
      res.json("toto")
    })
    this.io.on('connection', (socket: any) => {
      this.io.emit('connection', socket.id)
    })

    return Promise.resolve(true)
  }
}