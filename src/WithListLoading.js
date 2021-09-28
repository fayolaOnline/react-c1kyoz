import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack'

function WithListLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading)
      return (
        <Alert variant="info">
          <Container>
            <Row>
              <Col xs={3}><Spinner animation="grow" role="status" variant="info" /></Col>
              <Col suto>Hold on, fetching data may take some time :)</Col>
            </Row>
          </Container>
        </Alert>
      );
    //if (!isLoading) return <Component {...props} />;
    return (
      <span className="visually-hidden">
        <ListGroup horizontal>
          <ListGroup.Item>
            <Spinner animation="grow" role="status" variant="secondary" />
          </ListGroup.Item>
          <ListGroup.Item>
            Hold on, fetching data may take some time :)
          </ListGroup.Item>
        </ListGroup>
      </span>
    );
  };
}
export default WithListLoading;
