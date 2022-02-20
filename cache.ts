import { makeVar } from '@apollo/client'
interface Task {
  goodStatus: { [key: string]: boolean }
}
export const goodStatusVar = makeVar<{ [key: string]: boolean }>({})
