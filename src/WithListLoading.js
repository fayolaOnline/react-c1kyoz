import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function WithListLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <span className="visually-hidden">
        <Alert variant="info">
          <Container>
            <Row gap={0}>
              <Col xs={2}>
                <Spinner animation="grow" role="status" variant="info" />
              </Col>
              <Col auto>Hold on, fetching data may take some time :)</Col>
            </Row>
          </Container>
        </Alert>
      </span>
    );
  };
}
export default WithListLoading;
