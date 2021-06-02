import { CharacterInterface } from "./Character"

export class Peasant implements CharacterInterface {
  readonly roleId: number
  readonly name: string
  readonly description: string
  readonly order: number
  constructor() {
    this.roleId = 0;
    this.name = 'Paysan'
    this.description = 'Tu es inutile, bien joué à toi'
    this.order = -1
  }
}