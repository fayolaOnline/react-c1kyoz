import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function WithListLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <Spinner animation="grow" role="status" variant="secondary">
        <span className="visually-hidden">
          Hold on, fetching data may take some time :)
        </span>
      </Spinner>
    );
  };
}
export default WithListLoading;
