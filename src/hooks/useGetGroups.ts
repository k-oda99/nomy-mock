import { useGetGroupsQuery } from '../types/generated/graphql'
import { group } from '../types/group'
import { user } from '../types/user'

export const useGetGroups = () => {
  const { data } = useGetGroupsQuery()

  // クエリの型をプレーンなオブジェクトの型に変換
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
    convertedGroup.id = group.id
    convertedGroup.users = convertedUsers
    output.push(convertedGroup)
    return output
  }, [])

  return { groups }
}
