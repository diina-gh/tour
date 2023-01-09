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
                price
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


export  function getServices (page, take, filter, orderBy) {
    const { data, loading, error } = useQuery(ServicesQuery, {variables: { page, take, filter,orderBy },});
    return {servicesData: data, servicesLoading: loading, servicesError: error}
}
