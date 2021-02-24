import React from 'react';

export default function IdCard(props) {
  const stringHeight = JSON.stringify(props.height);
  const formatedHeight = `${stringHeight.slice(0, 1)}m${stringHeight.slice(1,3)}`;
  console.log(formatedHeight);
  return (
    <div className="card">
      <img src={props.picture} className="image"/>
      <div className="info">
        <h1>First name: {props.firstName}</h1>
        <h1>Last name: {props.lastName}</h1>
        <h1>Gender: {props.gender}</h1>
        <h1>Height: {formatedHeight}</h1>
        <h1>Date of Birth: {props.birth.toLocaleDateString()}</h1>
      </div>
    </div>
  );
}
