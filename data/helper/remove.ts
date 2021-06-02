import { Role } from "../interface"
const removeRole = async function (arr: Array<Role>, roleId: number): Promise<Array<Role>> {
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[0].roleId === roleId) {
      arr.splice(i, 1)
      break;
    }
  }
  return arr;
}
export { removeRole }