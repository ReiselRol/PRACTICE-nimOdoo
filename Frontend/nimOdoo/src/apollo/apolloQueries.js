import { gql } from '@apollo/client';

export const getAllUsers = gql`
query GetUsers {
    getUsers {
        ID
        name
        surname
        email
        password
        admin
    }
}`

export const getUsersByEmail = gql`
query GetUserByEmail($userEmail: String) {
    getUserByEmail(userEmail: $userEmail) {
      email
      password
      admin
      ID
      name
      surname
    }
  }`

export const addUser = gql`
mutation Mutation($name: String!, $surname: String!, $email: String!, $password: String!, $admin: Boolean!) {
  addUser(name: $name, surname: $surname, email: $email, password: $password, admin: $admin) {
    ID
    name
    surname
    email
    password
    admin
  }
}`