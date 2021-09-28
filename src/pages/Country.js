import Search from '../Search';
import withListLoading from '../WithListLoading';
import CountryList from '../CountryList';
import DataGrab from '../DataGrab';
import Notes from '../Notes';
import React, { useEffect, useState } from 'react';
import '../style.css';
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

export default function Country() {
  /////https://restcountries.com/v3/name/peru
  return <h2>Country</h2>;
}
