
import { Bdd } from '../../data';
import { Express, Request, Response } from "express"
import { Server } from "socket.io";
export class GameRoute {
  private readonly app: Express
  private readonly bdd: Bdd
  private readonly io: Server
  private path: string = "/game"
  constructor(p: { app: Express, bdd: Bdd, io: Server }) {
    this.app = p.app
    this.bdd = p.bdd
    this.io = p.io
    this.app.post(`${this.path}`, this.create.bind(this))
  }

  //TODO create round logic 
  async create(req: Request, res: Response): Promise<void> {
    const [numberCharacter, numberUser] = await Promise.all([
      this.bdd.getNumberCharacter(this.bdd),
      this.bdd.getNumberUser(this.bdd)
    ])
    if (numberUser > numberCharacter) {
      res.status(409).send(`Il faut rajouter ${numberUser - numberCharacter} personnage`)
    } else if (numberUser < numberCharacter)
      res.status(409).send(`Il faut enlever ${numberCharacter - numberUser} role`)
    else {
      const users = await this.bdd.giveRole(this.bdd)
      users.map((user) => {
        this.io.to(user.id).emit("get_character", user)
      })
      res.json("done").status(200)
    }
  }
}