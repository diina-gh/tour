import { gql, useQuery } from "@apollo/client";

export const SavePlaceReservation = gql`
    mutation SavePlaceReservation($id: Int, $placeId: Int, $userId: Int, $date: String, $nbPersons: Int, $services: [Int]) {
        savePlaceReservation(id: $id, placeId: $placeId, userId: $userId, date: $date, nbPersons: $nbPersons, services: $services) {
            ... on PlaceReservation {
                id
                date
                nbPersons
                createdat
                updatedat
                place {
                    id
                    name
                }
                placeReservationServices {
                    id
                    service {
                        id
                        name
                    }
                }
                user {
                    id
                    email
                    firstname
                    lastname
                }
            }
        }
    }
`;