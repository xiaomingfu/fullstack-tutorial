import { gql, useQuery } from "@apollo/client";
import React from "react";

import { Layout, QueryResult } from "../components";
import ModlueDetails from "../components/module-detail";

export const GET_MODULE_AND_PARENT_TRACK = gql`
  query getModuleAndParentTrack($trackId: ID!, $moduleId: ID!) {
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
    module(id: $moduleId) {
      id
      title
      videoUrl
      content
    }
  }
`;

const Module = ({ trackId, moduleId }) => {
  const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
    variables: { trackId, moduleId },
  });
  return (
    <Layout fullWidth>
      <QueryResult loading={loading} error={error} data={data}>
        <ModlueDetails module={data?.module} track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
