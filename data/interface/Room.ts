import { UserInterface } from ".";
import { Role } from "./roles"
export class Room {
  public user: UserInterface[]
  public dead: number
  public deadThisLap: UserInterface[]
  public roles: Array<Role>
  public Saveroles?: Array<Role>
  public numberPlayer: number
  constructor() {
    this.user = [];
    this.dead = 0;
    this.numberPlayer = 0;
    this.deadThisLap = [];
    this.roles = [];
  }
}