import React from "react";
import { useQuery, gql } from "@apollo/client";

import { Layout } from "../components";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

export default Tracks;
