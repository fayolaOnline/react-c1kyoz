import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { generatePath } from 'react-router-dom';
import './style.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ value: event.target.value });
    //alert(newUrl);
    // Will return /search/name
    //alert('A name was submitted: ' + this.state.value);
    //Search Countries using the apiUrl
    const apiUrl = 'https://restcountries.com/v3/name/' + this.state.value;
    alert(apiUrl);

    window.location.replace('/search/' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formCountry">
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    );
  }
}

export default SearchForm;
