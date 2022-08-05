import React from 'react';
import { Bar } from './Bar';
import { Pie } from './Pie';
import batch1 from './batch1';

const total = batch1.length;
const Max = Math.max(...batch1.map(o => o.Final));
const Min = Math.min(...batch1.map(o => o.Final));
const arr = batch1.map(o => o.Final);
const Avg = arr.reduce((a, b) => a + b, 0) / arr.length;

export default function Stats() {
  return (
    <div
      id="statsMain"
      className="animate__animated animate__fadeIn animate__slower"
    >
      <h1> STATISTICS </h1>
      <div id="fl">
        <div>
          <Bar />
        </div>
        <div>
          <Pie />
        </div>
      </div>
      <h3>Number of Students: {total}</h3>
      <p>Maximum Grade: {Max}</p>
      <p> Minimum Grade:{Min}</p>
      <p>Average Grade: {Avg}</p>
    </div>
  );
}
