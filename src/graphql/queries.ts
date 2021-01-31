import { useQuery, gql } from "@apollo/client";
import { USER_FRAGMENT, CONTACT_FRAGMENT } from "./fragments";
import { MyContactsQuery, MyContactsQueryVariables } from "./__generated__/types";

export const MY_CONTACTS_QUERY = gql`
  query myContacts {
    myContacts {
      ...Contact
    }
  }
  ${CONTACT_FRAGMENT}
`;

export function useMyContactsQuery() {
  return useQuery<MyContactsQuery, MyContactsQueryVariables>(MY_CONTACTS_QUERY);
}

// export function usePlaylistQuery(playlistId: string) {
//   return useQuery<PlaylistQuery, PlaylistQueryVariables>(PLAYLIST_QUERY, {
//     variables: { playlistId },
//   });
// }
