import { gql, useQuery } from "@apollo/client";

export const SaveCommande = gql`
    mutation SaveCommande($id: Int, $restaurantId: Int, $userId: Int, $typeLivraison: TypeLivraison, $address: String, $commandeMenus: [CommandeMenuInput]) {
        saveCommande(id: $id, restaurantId: $restaurantId, userId: $userId, typeLivraison: $typeLivraison, address: $address, commandeMenus: $commandeMenus) {
            __typename
            ... on Commande {
                id
                code
                status
                address
                typeLivraison
                etatLivraison
                userId
                restaurantId
                sousTotal
                tax
                total
            }
            ... on InputError {
                message
            }
        }
    }
`;