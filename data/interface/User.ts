import { CharacterInterface } from "../../domain/model/Character"
export interface UserInterface {
  username: string
  character?: CharacterInterface
  id: string
}