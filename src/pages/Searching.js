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

export default function Home() {
  const ListLoading = withListLoading(CountryList);
  const [appState, setAppState] = useState({
    loading: false,
    countries: null,
  });
  useEffect(() => {
    setAppState({ loading: true });
    var str = window.location.href; //window.location.href;
    var param = str.split('/')[4];
    //alert(param);
    const apiUrlnew = 'https://restcountries.com/v3/name/' + param;
    const apiUrl = 'https://restcountries.com/v3/all';
    //alert('Fetching from: ' + apiUrlnew);
    fetch(apiUrlnew)
      .then((res) => res.json())
      .then((countries) => {
        setAppState({ loading: false, countries: countries });
      });
  }, [setAppState]);

  return (
    <div>
      <DataGrab />

      <Search />
      <div className="country-container">
        <ListLoading
          isLoading={appState.loading}
          countries={appState.countries}
        />
      </div>
    </div>
  );
}
