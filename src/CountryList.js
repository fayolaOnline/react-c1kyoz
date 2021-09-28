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
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={country.flags[0]} />
            <Card.Body>
              <Card.Title>
                {country.name.official}
              </Card.Title>
              <Card.Text>region: {country.region}</Card.Text>
              <Card.Text>subregion: {country.subregion}</Card.Text>
              <Card.Text>capital: {country.capital}</Card.Text>
              <Card.Text>tlds: {country.tld}</Card.Text>{' '}
              <Card.Text>currencies: {currencies}</Card.Text>{' '}
              <Card.Text>languages: {languages}</Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Title>Bordering Countries</Card.Title>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      );
    }
  });

  return <ul>{cList}</ul>;
};
export default CountryList;
