import React, { FunctionComponent } from 'react';
import { server } from '../../lib/api';
import {
  DeleteListingData,
  DeleteListingVariables,
  ListingsData,
} from './types';

const LISTINGS = `
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBaths
      numOfBeds
      rating
    }
  }
`;

const DELETE_LISTING = `
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) {
      id
    }
  }
`;

interface Props {
  title: string;
}

export const Listings: FunctionComponent<Props> = ({ title }) => {
  const fetchListings = async () => {
    const { data } = await server.fetch<ListingsData>({ query: LISTINGS });
    console.log(data);
  };

  const deleteListing = async () => {
    const response = await server.fetch<
      DeleteListingData,
      DeleteListingVariables
    >({
      query: DELETE_LISTING,
      variables: {
        id: '5ea1fa604e83cd337c6f2117', // hardcoded id variable,
      },
    });
    console.log(response.data.deleteListing); // check the console to see the result of the mutation!
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={fetchListings}>Query listings!</button>
      <button onClick={deleteListing}>Delete a listing!</button>
    </div>
  );
};
