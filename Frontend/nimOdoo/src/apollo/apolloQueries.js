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