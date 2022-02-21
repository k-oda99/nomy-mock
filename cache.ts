import { makeVar } from '@apollo/client'

export const goodStatusVar = makeVar<{ [key: string]: boolean }>({})
