import React from 'react';
import { Layout } from '../components';
import { gql } from '@apollo/client'


const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;


const Tracks = () => {
  return <Layout grid> </Layout>;
};

export default Tracks;
