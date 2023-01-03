import { gql, useQuery } from "@apollo/client";

export const PlacesQuery = gql`
    query Places($filter: PlaceFilterInput, $page: Int, $take: Int, $orderBy: PlaceOrderInput) {
        places(filter: $filter, page: $page, take: $take, orderBy: $orderBy) {
            count
            places {
                id
                name
                desc
                activated
                address
                ticketPrice
                latitude
                longitude
                createdat
                updatedat
                categoryId
                category {
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
`
;

export const PlaceQuery = gql`
    query Place($id: Int) {
        place(id: $id) {
            ... on Place {
                id
                name
                desc
                activated
                ticketPrice
                latitude
                longitude
                address
                createdat
                updatedat
                categoryId
                category {
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

export const SavePlaceMutation = gql`
    mutation SavePlace($id: Int, $name: String, $desc: String, $activated: Boolean, $latitude: String, $longitude: String, $categoryId: Int, $address: String, $ticketPrice: Float) {
        savePlace(id: $id, name: $name, desc: $desc, activated: $activated, latitude: $latitude, longitude: $longitude, categoryId: $categoryId, address: $address, ticketPrice: $ticketPrice) {
            __typename
            ... on Place {
                id
                name
                desc
                activated
                address
                ticketPrice
                latitude
                longitude
                createdat
                updatedat
                categoryId
                category {
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

export const DeletePlaceMutation = gql`
    mutation DeletePlace($id: Int) {
        deletePlace(id: $id) {
            __typename
            ... on Place {
                id
                name
                desc
                activated
                address
                ticketPrice
                latitude
                longitude
                createdat
                updatedat
                categoryId
                category {
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


export  function getPlaces (page, take, filter, orderBy) {
    const { data, loading, error } = useQuery(PlacesQuery, {variables: { page, take, filter,orderBy },});
    return {placesData: data, placesLoading: loading, placesError: error}
}