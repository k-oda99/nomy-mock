// import { User } from '../types/User'
// import { useGetGroupByIdQuery } from '../types/generated/graphql'
import { GOOD_GROUP_DATA } from '../constants/ownGroupData'

const useGetGoodGroup = (groupId) => {
  // const { groupId } = props
  // const { data, ...rest } = useGetGroupByIdQuery({
  //   variables: {
  //     id,
  //   },
  // })

  // クエリの型をプレーンなオブジェクトの型に変換
  // const users = data?.groups_by_pk.users.map<User>((user) => ({
  //   id: user.id,
  //   name: user.name,
  //   age: user.age,
  //   job: user.job,
  //   imageForCard: user.image_for_card,
  //   imageForIcon: user.image_for_icon,
  //   imageForProfile: user.image_for_profile,
  // }))

  // return { ...rest, data: users }

  const group = GOOD_GROUP_DATA.filter((group) => group.id === groupId)[0]
  return group?.users
}

export default useGetGoodGroup
