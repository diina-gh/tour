import { gql, useQuery } from "@apollo/client";

export const CategoryEventsQuery = gql`
    query CategoryEvents($filter: CategoryEventFilterInput, $page: Int, $take: Int, $orderBy: CategoryEventOrderInput) {
        categoryEvents(filter: $filter, page: $page, take: $take, orderBy: $orderBy) {
            count
            categoryEvents {
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

export const CategoryEventQuery = gql`
  query CategoryEvent($id: Int) {
    categoryEvent(id: $id) {
        __typename
        ... on InputError{
            message
        }
        ... on CategoryEvent {
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

export const SaveCategoryEventMutation = gql`
    mutation SaveCategoryEvent($id: Int, $name: String, $desc: String, $activated: Boolean) {
        saveCategoryEvent(id: $id, name: $name, desc: $desc, activated: $activated) {
            __typename
            ... on CategoryEvent {
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

export const DeleteCategoryEventMutation = gql`
    mutation DeleteCategoryEvent($id: Int) {
        deleteCategoryEvent(id: $id) {
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

export  function getCategoryEvents (page, take, filter, orderBy) {
    const { data, loading, error } = useQuery(CategoryEventsQuery, {variables: { page, take, filter,orderBy },});
    return {categoryEventsData: data, categoryEventsLoading: loading, categoryEventsError: error}
}