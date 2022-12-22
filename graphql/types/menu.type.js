import { gql, useQuery } from "@apollo/client";

export const MenusQuery = gql`
    query Menus($filter: MenuFilterInput, $page: Int, $take: Int, $orderBy: MenuOrderInput) {
        menus(filter: $filter, page: $page, take: $take, orderBy: $orderBy) {
            count
            menus {
                id
                name
                desc
                activated
                price
                createdat
                updatedat
                restaurantId
                restaurant {
                    id
                    name
                    images {
                        id
                        imageref
                        url
                    }
                }
                categoryMenuId
                categoryMenu {
                    id
                    name
                }
                images {
                    id
                    imageref
                    url
                }
            }
        }
    }
`;

export const MenuQuery = gql`
    query Menu($id: Int) {
        menu(id: $id) {
            __typename
            ... on Menu {
                id
                name
                desc
                activated
                price
                createdat
                updatedat
                restaurantId
                restaurant {
                    id
                    name
                    images {
                        id
                        imageref
                        url
                    }
                }
                categoryMenuId
                categoryMenu {
                    id
                    name
                }
                images {
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

export const SaveMenuMutation = gql`
    mutation SaveMenu($id: Int, $name: String, $desc: String, $activated: Boolean, $price: Float, $restaurantId: Int, $categoryMenuId: Int) {
        saveMenu(id: $id, name: $name, desc: $desc, activated: $activated, price: $price, restaurantId: $restaurantId, categoryMenuId: $categoryMenuId) {
            __typename
            ... on Menu {
                id
                name
                desc
                activated
                price
                createdat
                updatedat
                restaurantId
                restaurant {
                    id
                    name
                }
                categoryMenuId
                categoryMenu {
                    id
                    name
                }
                images {
                    id
                    imageref
                    url
                }
            }
        }
    }
`;

export const DeleteMenuMutation = gql`
    mutation DeleteMenu($deleteMenuId: Int) {
        deleteMenu(id: $deleteMenuId) {
            __typename
            ... on Menu {
                id
                name
                desc
                activated
                price
                createdat
                updatedat
                restaurantId
                restaurant {
                    id
                    name
                }
                categoryMenuId
                categoryMenu {
                    id
                    name
                }
                images {
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