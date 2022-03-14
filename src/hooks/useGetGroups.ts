import { Group } from '../types/Group'
import { User } from '../types/User'
import { useGetGroupsQuery } from '../types/generated/graphql'

const useGetGroups = () => {
  const { data, ...rest } = useGetGroupsQuery()

  // クエリの型をプレーンなオブジェクトの型に変換
  // const groups = data?.groups.map<Group>((group) => {
  //   const users = group.users
  //   const convertedUsers = users?.map<User>((user) => ({
  //     id: user.id,
  //     name: user.name,
  //     age: user.age,
  //     job: user.job,
  //     imageForCard: user.image_for_card,
  //     imageForIcon: user.image_for_icon,
  //     imageForProfile: user.image_for_profile,
  //   }))
  //   const convertedGroup: Group = {} as Group
  //   convertedGroup.id = group.id
  //   convertedGroup.users = convertedUsers
  //   return convertedGroup
  // }, [])

  // return { ...rest, data: groups }
}

export default useGetGroups
