import { User } from './User'

export type Group = {
  id: string
  users: User[]
  goodGroups?: Group[]
  matchedGroups?: Group[]
}
