import Search from './Search';
import withListLoading from './WithListLoading';
import CountryList from './CountryList';
import DataGrab from './DataGrab';
import React, { useEffect, useState } from 'react';
import './style.css';
import Home from './pages/Home';
import Searching from './pages/Searching';
import Country from './pages/Country';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Tabs from 'react-bootstrap/Tabs';
import Stack from 'react-bootstrap/Stack';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar bg="primarylight" variant="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/country">Country</Nav.Link>
              <Nav.Link href="/search">Search</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/search">
            <Searching />
          </Route>
          <Route path="/country">
            <Country />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
