import React from 'react';
import './style.css';

export default function Notes() {
  return (
    <div>
      <h1>Country Flags</h1>
      <ol>
        <li>Flag</li>
        <li>Name</li>
        <li>left side</li>
        <ol>
          <li>Region</li>
          <li>Sub Region</li>
          <li>Capital</li>
        </ol>
        <li>right side</li>
        <ol>
          <li>Top Level Domain</li>
          <li>Currencies</li>
          <li>Languages</li>
        </ol>
        <li>Border Countries</li>
      </ol>
    </div>
  );
}
