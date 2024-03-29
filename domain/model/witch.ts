import { CharacterInterface } from "./Character"
export class Witch implements CharacterInterface {
  readonly roleId: number
  readonly name: string
  readonly description: string
  readonly order: number
  readonly healPotion: number
  readonly deathPotion: number
  constructor() {
    this.roleId = 2
    this.name = 'Sorcière'
    this.description = 'Yann fait pas le con mec'
    this.order = 2
    this.healPotion = 1
    this.deathPotion = 1
  }
}