import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="App-header">
      <Link to="/">
        <h1>Noteful</h1>
      </Link>
    </header>
  )
}
