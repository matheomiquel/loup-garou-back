import { CharacterInterface } from "./Character"

export class Warewolf implements CharacterInterface {
  readonly roleId: number
  readonly name: string
  readonly description: string
  readonly order: number
  constructor() {
    this.roleId = 3
    this.name = 'Loup-garou'
    this.description = 'Il faut tuer, mais pas celui qui a écrit ça <3'
    this.order = 1
  }
}