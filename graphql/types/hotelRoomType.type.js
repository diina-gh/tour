import { gql, useQuery } from "@apollo/client";

export const HotelRoomTypesQuery = gql`
    query HotelRoomTypes($filter: HotelRoomTypeFilterInput, $page: Int, $take: Int, $orderBy: HotelRoomTypeOrderInput) {
        hotelRoomTypes(filter: $filter, page: $page, take: $take, orderBy: $orderBy) {
            count
            hotelRoomTypes {
                id
                price
                activated
                createdat
                updatedat
                hotel {
                    id
                    name
                    images {
                        id
                        imageref
                        url
                    }
                }
                roomType {
                    id
                    name
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

export  function getHotelRoomTypes (page, take, filter, orderBy) {
    const { data, loading, error } = useQuery(HotelRoomTypesQuery, {variables: { page, take, filter,orderBy },});
    return {hotelRoomTypesData: data, hotelRoomTypesLoading: loading, hotelRoomTypesError: error}
}

