import { gql, useQuery } from "@apollo/client";
import React from "react";

import { Layout, QueryResult } from "../components";
import TrackDetails from "../components/track-detail";

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
      }
      author {
        id
        name
        photo
      }
    }
  }
`;

const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId },
  });
  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <TrackDetails track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
