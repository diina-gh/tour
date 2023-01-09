import { gql, useQuery } from "@apollo/client";

export const SaveEventReservation = gql`
    mutation SaveEventReservation($id: Int, $eventId: Int, $userId: Int, $nbPersons: Int) {
        saveEventReservation(id: $id, eventId: $eventId, userId: $userId, nbPersons: $nbPersons) {
            ... on EventReservation {
                id
                nbPersons
                createdat
                updatedat
                event {
                    id
                    name
                }
                user {
                    id
                    firstname
                    lastname
                    email
                }
            }
        }
    }
`;