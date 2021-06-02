
import { Bdd } from '../../data';
import { Express, Request, Response } from "express"
import { Server } from "socket.io";
export class RoomRoute {
  private readonly io: Server
  private readonly app: Express
  private readonly bdd: Bdd
  private path: string = "/room"
  constructor(p: { app: Express, bdd: Bdd, io: Server }) {
    this.app = p.app
    this.bdd = p.bdd
    this.io = p.io
    this.app.post(`${this.path}`, this.create.bind(this))
    this.app.get(`${this.path}`, this.read.bind(this))
    this.app.post(`${this.path}/witch`, this.addWitch.bind(this))
    this.app.post(`${this.path}/warewolf`, this.addWarewolf.bind(this))
    this.app.post(`${this.path}/peasant`, this.addPeasant.bind(this))
    this.app.post(`${this.path}/cupid`, this.addCupid.bind(this))
    this.app.post(`${this.path}/remove`, this.remove.bind(this))
  }

  //TODO create route addRole (req.body.idRole)
  //TODO create route get all possible role
  async create(req: Request, res: Response): Promise<void> {
    this.bdd.createRoom(this.bdd, req.body.numberPlayer)
    res.json("done")
  }
  async read(req: Request, res: Response): Promise<void> {
    const roles = (await this.bdd.readRoom(this.bdd)).roles.sort((previous, current) => previous.order - current.order)
    res.json(roles)
  }
  async addWitch(req: Request, res: Response) {
    const roles = await this.bdd.addWitch(this.bdd)
    this.io.emit('refresh_role', roles)
    res.json("done")
  }
  async addWarewolf(req: Request, res: Response) {
    const roles = await this.bdd.addWarewolf(this.bdd)
    this.io.emit('refresh_role', roles)
    res.json("done")
  }
  async addPeasant(req: Request, res: Response) {
    const roles = await this.bdd.addPeasant(this.bdd)
    this.io.emit('refresh_role', roles)
    res.json("done")
  }
  async addCupid(req: Request, res: Response) {
    const roles = await this.bdd.addCupid(this.bdd)
    this.io.emit('refresh_role', roles)
    res.json("done")
  }
  async remove(req: Request, res: Response) {
    const roles = await this.bdd.remove(this.bdd, req.body.roleId)
    this.io.emit('refresh_role', roles)
    res.json("done")
  }
}