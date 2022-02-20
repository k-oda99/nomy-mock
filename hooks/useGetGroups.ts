import { useQuery } from '@apollo/client'
import { GET_GROUPS, GET_USERIDS } from '../queries/queries'
import { GetGroupsQuery, GetUserIdsQuery } from '../types/generated/graphql'
import { group } from '../types/group'
import { user } from '../types/user'

export const useGetGroups = () => {
  const { data, error } = useQuery<GetGroupsQuery>(GET_GROUPS, {
    fetchPolicy: 'cache-and-network',
  })

  const groups: group[] = data?.groups.reduce<group[]>((output, group) => {
    const users = group.users
    const convertedUsers: user[] = users.reduce<user[]>((output2, user) => {
      const { name, age, job, image } = user
      const userObj: user = {} as user
      userObj.name = name
      userObj.age = age
      userObj.job = job
      userObj.image = image
      output2.push(userObj)
      return output2
    }, [])
    const convertedGroup: group = {} as group
    convertedGroup.users = convertedUsers
    output.push(convertedGroup)
    return output
  }, [])

  return { groups }
}
