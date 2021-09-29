import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const CountryNode = (prop) => {
  const { country } = prop;

  var strCountry = JSON.stringify(country);
  var daerror =
    '{"message":"Page Not Found","_links":{"self":{"href":"/v3/names/undefined","templated":false}}}';
  var notFound = '{"status":404,"message":"Not Found"}';

  const toType = (obj) => {
    return {}.toString
      .call(obj)
      .match(/\s([^\]]+)/)[1]
      .toLowerCase();
  };

  var cNode = (country) => {
    if (
      country.name.official === undefined ||
      country.flags[0] === undefined ||
      country.languages === undefined ||
      country.latlng[0] === undefined ||
      country.currencies === undefined ||
      country.tld === undefined ||
      country.latlng === undefined ||
      country.capital === undefined ||
      country.region === undefined ||
      country.subregion === undefined ||
      country.borders === undefined
    ) {
      console.log('Unexpected Data recieved.');
    } else {
      var languages = '';
      for (const x in country.languages) {
        languages += country.languages[x] + ', ';
      }
      var currencies = '';
      for (const x in country.currencies) {
        currencies +=
          x +
          ',' +
          country.currencies[x].symbol +
          ',' +
          country.currencies[x].name +
          ', ';
      }
      return (
        <div>
          <ListGroup>
            <ListGroup.Item>
              <Image fluid src={country.flags[0]} rounded />
            </ListGroup.Item>
            <ListGroup.Item>{country.name.official}</ListGroup.Item>
            <ListGroup.Item>region: {country.region}</ListGroup.Item>
            <ListGroup.Item>subregion: {country.subregion}</ListGroup.Item>
            <ListGroup.Item>capital: {country.capital}</ListGroup.Item>
            <ListGroup.Item>tlds: {country.tld}</ListGroup.Item>{' '}
            <ListGroup.Item>currencies: {currencies}</ListGroup.Item>{' '}
            <ListGroup.Item>languages: {languages}</ListGroup.Item>
            <ListGroup.Item>Bordering Countries</ListGroup.Item>
            <ListGroup.Item href="#">Card Link</ListGroup.Item>
            <ListGroup.Item href="#">Another Link</ListGroup.Item>
          </ListGroup>
        </div>
      );
    }
  };

  return <ul>{cNode}</ul>;
};
export default CountryNode;
