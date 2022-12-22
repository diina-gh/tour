import { gql, useQuery } from "@apollo/client";

export const ImageMutation = gql`
    mutation SaveImage($id: Int, $entiteId: Int, $ref: String, $url: String, $isDefault: Boolean, $isCover: Boolean) {
        saveImage(id: $id, entiteId: $entiteId, ref: $ref, url: $url, isDefault: $isDefault, isCover: $isCover) {
            __typename
            ... on Image {
                id
                imageref
                url
                isDefault
                isCover
                createdat
                updatedat
            }
            ... on InputError {
                message
            }
        }
    }
`;
