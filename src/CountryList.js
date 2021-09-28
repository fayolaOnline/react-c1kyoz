import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const CountryList = (props) => {
  const { countries } = props;
  ///var countriesList = countries.map(function (country) {
  ///  return <li>{country}</li>;
  ///});

  if (!countries || countries.length === 0)
    return <p>No countries found, sorry.</p>;

  //put them in alphabetical order
  countries.sort((a, b) =>
    a.name.official > b.name.official
      ? 1
      : b.name.official > a.name.official
      ? -1
      : 0
  );
  var cList = countries.map(function (country) {
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
          <ListGroup horizontal>
            <ListGroup.Item>
              <Image src={country.flags[0]} rounded />
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
  });

  return <ul>{cList}</ul>;
};
export default CountryList;
