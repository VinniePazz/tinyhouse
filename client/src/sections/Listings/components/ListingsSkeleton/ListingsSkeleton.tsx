import React from 'react';
import { Skeleton, Divider, Alert } from 'antd';
import './styles/ListingsSkeleton.css';

interface Props {
  title: string;
  error?: boolean;
}

export const ListingsSkeleton = ({ title, error = false }: Props) => {
  const errorAlert = error ? (
    <Alert
      type="error"
      message="Uh oh! Something went wrong - please try again later :("
      className="listings-skeleton-alert"
    />
  ) : null;

  return (
    <div className="listingsSkeleton">
      {errorAlert}
      <h2>{title}</h2>
      <Skeleton active={true} paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active={true} paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active={true} paragraph={{ rows: 1 }} />
    </div>
  );
};
