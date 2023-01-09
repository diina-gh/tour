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

export  function getMenus (page, take, filter, orderBy) {
    const { data, loading, error } = useQuery(MenusQuery, {variables: { page, take, filter,orderBy },});
    return {menusData: data, menusLoading: loading, menusError: error}
}