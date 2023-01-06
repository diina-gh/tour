import { gql, useQuery } from "@apollo/client";

export const SaveHotelReservation = gql`
    mutation SaveHotelReservation($id: Int, $hotelId: Int, $userId: Int, $hotelRoomTypeId: Int, $startDate: String, $endDate: String, $nbPersons: Int) {
        saveHotelReservation(id: $id, hotelId: $hotelId, userId: $userId, hotelRoomTypeId: $hotelRoomTypeId, startDate: $startDate, endDate: $endDate, nbPersons: $nbPersons) {
            __typename
            ... on HotelReservation {
                id
                user {
                    id
                    firstname
                    lastname
                    email
                }
                hotel {
                    id
                    name
                }
                hotelRoomType {
                    id
                    roomType {
                        id
                        name
                    }
                }
            }
            ... on InputError {
            message
            }
        }
    }
`;