import React from 'react';

class DataGrab extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://restcountries.com/v3/all';
    var data
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.data = data);
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default DataGrab;
