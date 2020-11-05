import React from 'react';
import DonutItem from './DonutItem';

const DonutList = ({ donuts }) => {

  return (
    <ul>
      {donuts.map((donut) => {
        return (
          <li>
            <DonutItem donut={donut} key={`donut${donut.id}`} />
          </li>
        )
      })}
    </ul>
  );
};

export default DonutList;
