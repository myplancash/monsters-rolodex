import React from 'react';
import './card.styles.css';

export const Card = (props) => {
  return (
    <div className="column">
      <div className="ui link fluid card">
        <img className="image" alt="monster" src={`https://robohash.org/${props.monster.id}set=set2&size=180x180`} />
        <div className="content">
          <h1 className="header center aligned">{props.monster.name}</h1>
          <h2 className="meta">{props.monster.email}</h2>
        </div>
      </div>
    </div>
  );
}