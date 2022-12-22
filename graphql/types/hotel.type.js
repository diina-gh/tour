import { gql } from "@apollo/client";

export const HotelsQuery = gql`
    query Hotels($filter: HotelFilterInput, $page: Int, $take: Int, $orderBy: HotelOrderInput) {
        hotels(filter: $filter, page: $page, take: $take, orderBy: $orderBy) {
            count
            hotels {
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
        }
    }
`;

export const HotelQuery = gql`
    query Hotel($id: Int) {
        hotel(id: $id) {
            __typename
            ... on Hotel {
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

export const SaveHotelMutation = gql`
    mutation SaveHotel($saveHotelId: Int, $name: String, $desc: String, $activated: Boolean, $latitude: String, $longitude: String, $address: String) {
        saveHotel(id: $saveHotelId, name: $name, desc: $desc, activated: $activated, latitude: $latitude, longitude: $longitude, address: $address) {
            __typename
            ... on Hotel {
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

export const DeleteHotelMutation = gql`
    mutation DeleteHotel($id: Int) {
        deleteHotel(id: $id) {
            __typename
            ... on Hotel {
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