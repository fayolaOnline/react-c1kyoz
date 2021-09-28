import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

const CountryList = (props) => {
  const { countries } = props;

  var strCountries = JSON.stringify(countries);
  var daerror =
    '{"message":"Page Not Found","_links":{"self":{"href":"/v3/names/undefined","templated":false}}}';
  var notFound = '{"status":404,"message":"Not Found"}';

  const toType = (obj) => {
    return {}.toString
      .call(obj)
      .match(/\s([^\]]+)/)[1]
      .toLowerCase();
  };

  if (
    !countries ||
    countries.length === 0 ||
    countries === undefined ||
    strCountries === daerror ||
    strCountries === notFound
  ) {
    const apiUrl = 'https://restcountries.com/v3/all';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((countries) => {
        setAppState({ loading: false, countries: countries });
      });

    return (
      <div>
        {/*
      <p>{strCountries}</p>
      */}
        <p>Enter the name of a country.</p>
      </div>
    );
  }

  alert('contries is a ' + strCountries);

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
  });

  return <ul>{cList}</ul>;
};
export default CountryList;
