import React from 'react';

class DataGrab extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://restcountries.com/v3/all';
    var data;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => (this.data = data));
  }
}
export default DataGrab;
