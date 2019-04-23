import React from 'react';
import { Link } from 'react-router-dom';

export default function NoteSideBar(props) {
  console.log(props.note)
  return (
    <div>
      <Link to='/'>Go Back</Link>
      {props.note}
    </div>
  )
}
