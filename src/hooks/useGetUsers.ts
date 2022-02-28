import { useGetGroupByIdQuery } from '../types/generated/graphql'
import { user } from '../types/user'

export const useGetUsers = (id) => {
  const { data } = useGetGroupByIdQuery({
    variables: {
      id,
    },
  })

  // クエリの型をプレーンなオブジェクトの型に変換
  const users: user[] = data?.groups_by_pk.users.reduce<user[]>(
    (output, user) => {
      const {
        id,
        name,
        age,
        job,
        image_for_card,
        image_for_icon,
        image_for_profile,
      } = user
      const userObj: user = {} as user
      userObj.id = id
      userObj.name = name
      userObj.age = age
      userObj.job = job
      userObj.image_for_card = image_for_card
      userObj.image_for_icon = image_for_icon
      userObj.image_for_profile = image_for_profile
      output.push(userObj)
      return output
    },
    []
  )
  return { users }
}
