import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function WithListLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <span className="visually-hidden">
        <Spinner animation="grow" role="status" variant="secondary" />
        Hold on, fetching data may take some time :)
      </span>
    );
  };
}
export default WithListLoading;
