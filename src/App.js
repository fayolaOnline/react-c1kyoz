import Search from './Search';
import withListLoading from './WithListLoading';
import CountryList from './CountryList';
import DataGrab from './DataGrab';
import Notes from './Notes';
import React, { useEffect, useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'
import Tabs from 'react-bootstrap/Tabs'

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/country">Country</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/search">
            <Search />
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

function Home() {
  const ListLoading = withListLoading(CountryList);
  const [appState, setAppState] = useState({
    loading: false,
    countries: null,
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://restcountries.com/v3/all`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((countries) => {
        setAppState({ loading: false, countries: countries });
      });
  }, [setAppState]);
  return (
    <div>
      <Notes />
      <Search />
      <DataGrab />

      <div className="country-container">
        <ListLoading
          isLoading={appState.loading}
          countries={appState.countries}
        />
      </div>
    </div>
  );
}

function Country() {
  /////https://restcountries.com/v3/name/peru
  return <h2>Country</h2>;
}

function Search() {
  /////https://restcountries.com/v3/name/
  return <h2>Search</h2>;
}

/*
export default function App() {
  const ListLoading = withListLoading(CountryList);
  const [appState, setAppState] = useState({
    loading: false,
    countries: null,
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://restcountries.com/v3/all`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((countries) => {
        setAppState({ loading: false, countries: countries });
      });
  }, [setAppState]);
  return (
    <div>
      <Notes />
      <Search />
      <DataGrab />

      <div className="country-container">
        <ListLoading
          isLoading={appState.loading}
          countries={appState.countries}
        />
      </div>
    </div>
  );
}
*/
