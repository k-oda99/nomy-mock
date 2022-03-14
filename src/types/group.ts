import { User } from './User'

export type Group = {
  id: string
  users: User[]
  goodGroups?: Group[]
  matchedGroups?: MatchedGroups[]
}

type MatchedGroups = Group & {
  matchedGroupId: string
}
