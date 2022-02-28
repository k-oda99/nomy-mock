import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers {
    users(order_by: { created_at: desc }) {
      id
      name
      created_at
    }
  }
`
// export const GET_USERS_LOCAL = gql`
//   query GetUsers {
//     users(order_by: { created_at: desc }) @client {
//       id
//       name
//       created_at
//     }
//   }
// `
export const GET_USERIDS = gql`
  query GetUserIds {
    users(order_by: { created_at: desc }) {
      id
    }
  }
`
export const GET_USERBY_ID = gql`
  query GetUserById($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`
export const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    insert_users_one(object: { name: $name }) {
      id
      name
      created_at
    }
  }
`
export const DELETE_USER = gql`
  mutation DeleteUser($id: uuid!) {
    delete_users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`
export const UPDATE_USER = gql`
  mutation UpdateUser($id: uuid!, $name: String!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
      name
      created_at
    }
  }
`
export const GET_GROUPS = gql`
  query GetGroups {
    groups {
      id
      users(order_by: { age: asc, name: asc }) {
        id
        image_for_card
        image_for_icon
        image_for_profile
        job
        name
        age
      }
    }
  }
`
export const GET_GROUPBY_ID = gql`
  query GetGroupById($id: uuid!) {
    groups_by_pk(id: $id) {
      users(order_by: { name: asc, age: asc }) {
        age
        id
        image_for_card
        image_for_icon
        image_for_profile
        job
        name
      }
      id
    }
  }
`
export const GET_GROUPIDS = gql`
  query GetGroupIds {
    groups {
      id
    }
  }
`
