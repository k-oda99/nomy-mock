// import { User } from '../types/User'
// import { useGetGroupByIdQuery } from '../types/generated/graphql'
import { RECOMMEND_GROUP_DATA } from '../constants/opponentGroupData'

const useGetRecommendGroup = (id) => {
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

  const group = RECOMMEND_GROUP_DATA.filter((group) => group.id === id)[0]
  return group
}

export default useGetRecommendGroup
