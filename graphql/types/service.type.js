import { gql, useQuery } from "@apollo/client";

export const ServicesQuery = gql`
    query Services($filter: ServiceFilterInput, $page: Int, $take: Int, $orderBy: ServiceOrderInput) {
        services(filter: $filter, page: $page, take: $take, orderBy: $orderBy) {
            count
            services {
                id
                name
                desc
                activated
                order
                placeId
                place {
                    id
                    name
                }
                createdat
                updatedat
            }
        }
    }
`;

export const ServiceQuery = gql`
    query Service($id: Int) {
        service(id: $id) {
            __typename
            ... on Service {
                id
                name
                desc
                activated
                order
                placeId
                place {
                    id
                    name
                }
                createdat
                updatedat
            }
            ... on InputError {
                message
            }
        }
    }
`;

export const SaveServiceMutation = gql`
    mutation SaveService($id: Int, $name: String, $desc: String, $activated: Boolean, $placeId: Int) {
        saveService(id: $id, name: $name, desc: $desc, activated: $activated, placeId: $placeId) {
            __typename
            ... on Service {
                id
                name
                desc
                activated
                order
                placeId
                place {
                    id
                    name
                }
                createdat
                updatedat
            }
            ... on InputError {
                message
            }
        }
    }
`;

export const DeleteServiceMutation = gql`
    mutation DeleteService($id: Int) {
        deleteService(id: $id) {
            __typename
            ... on Service {
                id
                name
                desc
                activated
                address
                date
                startHours
                endHours
                latitude
                longitude
                organizedBy
                createdat
                updatedat
            }
            ... on InputError {
                message
            }
        }
    }
`;