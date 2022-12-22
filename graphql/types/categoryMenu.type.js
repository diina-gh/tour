import { gql, useQuery } from "@apollo/client";

export const CategoryMenusQuery = gql`
    query CategoryMenus($filter: CategoryMenuFilterInput, $page: Int, $take: Int, $orderBy: CategoryMenuOrderInput) {
        categoryMenus(filter: $filter, page: $page, take: $take, orderBy: $orderBy) {
            count
            categoryMenus {
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

export const CategoryMenuQuery = gql`
  query CategoryMenu($id: Int) {
    categoryMenu(id: $id) {
        __typename
        ... on InputError{
            message
        }
        ... on CategoryMenu {
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

export const SaveCategoryMenuMutation = gql`
    mutation SaveCategoryMenu($id: Int, $name: String, $desc: String, $activated: Boolean) {
        saveCategoryMenu(id: $id, name: $name, desc: $desc, activated: $activated) {
            __typename
            ... on CategoryMenu {
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

export const DeleteCategoryMenuMutation = gql`
    mutation DeleteCategoryMenu($id: Int) {
        deleteCategoryMenu(id: $id) {
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

export  function getCategoryMenus (page, take, filter, orderBy) {
    const { data, loading, error } = useQuery(CategoryMenusQuery, {variables: { page, take, filter,orderBy },});
    return {categoryMenusData: data, categoryMenusLoading: loading, categoryMenusError: error}
}