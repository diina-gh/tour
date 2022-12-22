import { gql } from "@apollo/client";

export const CategoriesQuery = gql`
    query categories($filter: CategoryFilterInput, $page: Int, $take: Int, $orderBy: CategoryOrderInput) {
    categories(filter: $filter, page: $page, take: $take, orderBy: $orderBy) {
        count
        categories {
            id
            name
            desc
            activated
            order
            createdat
            updatedat
        }
    }
    }
`
;

export const CategoryQuery = gql`
  query Category($id: Int) {
    category(id: $id) {
        __typename
        ... on InputError{
            message
        }
        ... on Category {
            id
            name
            desc
            order
            activated
            createdat
            updatedat
        }
    }
  }
`
;

export const SaveCategoryMutation = gql`
    mutation SaveCategory($id: Int, $name: String, $desc: String, $activated: Boolean) {
        saveCategory(id: $id, name: $name, desc: $desc, activated: $activated) {
            __typename
            ... on Category {
                id
                name
                desc
                activated
                order
                createdat
                updatedat
            }
            ... on InputError {
                message
            }
        }
    }
`;

export const DeleteCategoryMutation = gql`
    mutation DeleteCategory($id: Int) {
        deleteCategory(id: $id) {
            __typename
            ... on Category {
                id
                name
                desc
                activated
                order
                createdat
                updatedat
            }
            ... on InputError {
                message
            }
        }
    }
`;