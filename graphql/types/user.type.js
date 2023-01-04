import { gql, useQuery } from "@apollo/client";


export const UserQuery = gql`
  query User($id: Int) {
    user(id: $id) {
        __typename
        ... on InputError{
            message
        }
        ... on User {
            id
            civility
            email
            phonenumber
            firstname
            lastname
            activated
            createdat
            updatedat
            roleOnUsers {
                role {
                    id
                    name
                }
            }
            image {
                id
                imageref
                url
            }
        }
    }
  }
`
;

export const SaveUserMutation = gql`
    mutation SaveUser($id: Int, $civility: Civility, $email: String, $phonenumber: String, $firstname: String, $lastname: String, $password: String, $repassword: String, $roles: [Int], $activated: Boolean) {
        saveUser(id: $id, civility: $civility, email: $email, phonenumber: $phonenumber, firstname: $firstname, lastname: $lastname, password: $password, repassword: $repassword, roles: $roles, activated: $activated) {
            __typename
            ... on AuthPayload {
                token
                user {
                    id
                    civility
                    email
                    phonenumber
                    firstname
                    lastname
                    activated
                    createdat
                    updatedat
                    roleOnUsers {
                        role {
                            id
                            name
                        }
                    }
                    image {
                        id
                        imageref
                        url
                    }
                }
            }
            ... on InputError {
                message
            }
        }
    }
`;

export const LoginUser = gql`
    mutation Login($email: String, $password: String) {
        login(email: $email, password: $password) {
            ... on AuthPayload {
                token
                user {
                    id
                    civility
                    email
                    phonenumber
                    firstname
                    lastname
                    activated
                    createdat
                    updatedat
                    roleOnUsers {
                        role {
                            id
                            name
                        }
                    }
                    image {
                        id
                        imageref
                        url
                    }
                }
            }
            ... on InputError{
                message
            }
        }
    }
`;

export const DeleteUserMutation = gql`
    mutation DeleteUser($id: Int) {
        deleteUser(id: $id) {
            __typename
            ... on User {
                id
                civility
                email
                phonenumber
                firstname
                lastname
                activated
                createdat
                updatedat
                roleOnUsers {
                    role {
                    id
                    name
                    }
                }
                image {
                    id
                    imageref
                    url
                }
            }
            ... on InputError {
                message
            }
        }
    }
`;