import { gql, useQuery } from "@apollo/client";

export const RestaurantsQuery = gql`
    query Restaurants($filter: RestaurantFilterInput, $page: Int, $take: Int, $orderBy: RestaurantOrderInput) {
        restaurants(filter: $filter, page: $page, take: $take, orderBy: $orderBy) {
            count
            restaurants {
                id
                name
                desc
                activated
                address
                latitude
                longitude
                createdat
                updatedat
                images {
                    id
                    imageref
                    url
                }
                menus {
                    id
                    name
                    desc
                    price
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
    }
`;

export const RestaurantQuery = gql`
    query Restaurant($id: Int) {
        restaurant(id: $id) {
            __typename
            ... on Restaurant {
                id
                name
                desc
                activated
                address
                latitude
                longitude
                createdat
                updatedat
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

export const SaveRestaurantMutation = gql`
    mutation SaveRestaurant($id: Int, $name: String, $desc: String, $activated: Boolean, $latitude: String, $longitude: String, $address: String) {
        saveRestaurant(id: $id, name: $name, desc: $desc, activated: $activated, latitude: $latitude, longitude: $longitude, address: $address) {
            __typename
            ... on Restaurant {
                id
                name
                desc
                activated
                address
                latitude
                longitude
                createdat
                updatedat
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

export const DeleteRestaurantMutation = gql`
    mutation DeleteRestaurant($id: Int) {
        deleteRestaurant(id: $id) {
            __typename
            ... on Restaurant {
                id
                name
                desc
                activated
                address
                latitude
                longitude
                createdat
                updatedat
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

export  function getRestaurants (page, take, filter, orderBy) {
    const { data, loading, error } = useQuery(RestaurantsQuery, {variables: { page, take, filter,orderBy },});
    return {restaurantsData: data, restaurantsLoading: loading, restaurantsError: error}
}