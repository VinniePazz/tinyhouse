import React, { FunctionComponent } from 'react';

interface Props {
  title: string;
}

export const Listings: FunctionComponent<Props> = ({ title }) => {
  return <h2>{title}</h2>;
};
