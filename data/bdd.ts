import { Peasant, Warewolf, Witch, Cupid } from "../domain/model"
import { Room, UserInterface } from "./interface"
import { removeRole } from "./helper/remove"
import { Role } from "./interface"
export class Bdd {
  room: Room
  constructor() {
    this.room = new Room()
  }

  async createRoom(bdd: Bdd, numberPlayer: number): Promise<void> {
    bdd.room.numberPlayer = numberPlayer
  }
  async readRoom(bdd: Bdd): Promise<Room> {
    return bdd.room
  }

  async getNumberCharacter(bdd: Bdd): Promise<number> {
    return bdd.room.roles.length
  }

  async getNumberUser(bdd: Bdd): Promise<number> {
    return bdd.room.user.length
  }

  async login(bdd: Bdd, username: string, id: string): Promise<UserInterface> {
    bdd.room.user.push({ username: username, id: id })
    return bdd.room.user[bdd.room.user.length - 1]
  }


  /////////////////////////////////ADD ROLE////////////////////////////////
  async addWitch(bdd: Bdd): Promise<Array<Role>> {
    bdd.room.roles.push(new Witch())
    return bdd.room.roles
  }
  async addWarewolf(bdd: Bdd): Promise<Array<Role>> {
    bdd.room.roles.push(new Warewolf())
    return bdd.room.roles
  }
  async addPeasant(bdd: Bdd): Promise<Array<Role>> {
    bdd.room.roles.push(new Peasant())
    return bdd.room.roles
  }
  async addCupid(bdd: Bdd): Promise<Array<Role>> {
    bdd.room.roles.push(new Cupid())
    return bdd.room.roles
  }

  /////////////////////////////////REMOVE ROLE////////////////////////////////
  async remove(bdd: Bdd, roleId: number): Promise<Array<Role>> {
    bdd.room.roles = await removeRole(bdd.room.roles, roleId)
    return bdd.room.roles
  }

  /////////////////////////////////GIVE ROLE////////////////////////////////
  async giveRole(bdd: Bdd): Promise<Array<UserInterface>> {
    bdd.room.Saveroles = bdd.room.roles;
    for (let i = 0; i < bdd.room.user.length; i++) {
      const index = this.getRandomInt(bdd.room.roles.length)
      bdd.room.user[i].character = bdd.room.roles[index]
      bdd.room.roles.splice(index, 1)
    }
    return bdd.room.user
  }


  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}