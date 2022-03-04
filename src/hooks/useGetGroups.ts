import { Group } from '../types/Group'
import { User } from '../types/User'
import { useGetGroupsQuery } from '../types/generated/graphql'

const useGetGroups = () => {
  const { data } = useGetGroupsQuery()

  // クエリの型をプレーンなオブジェクトの型に変換
  const groups: Group[] = data?.groups.reduce<Group[]>((output, group) => {
    const users = group.users
    const convertedUsers = users.reduce<User[]>((output2, user) => {
      const {
        name,
        age,
        job,
        image_for_card,
        image_for_icon,
        image_for_profile,
      } = user
      const userObj: User = {} as User
      userObj.name = name
      userObj.age = age
      userObj.job = job
      userObj.imageForCard = image_for_card
      userObj.imageForProfile = image_for_icon
      userObj.imageForIcon = image_for_profile
      output2.push(userObj)
      return output2
    }, [])
    const convertedGroup: Group = {} as Group
    convertedGroup.id = group.id
    convertedGroup.users = convertedUsers
    output.push(convertedGroup)
    return output
  }, [])

  return { groups }
}

export default useGetGroups
