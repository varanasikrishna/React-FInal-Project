import React from 'react';
import { Chart } from 'react-google-charts';
import batch1 from './batch1';

const Pass = batch1.filter(el => {
  return el.Final >= 4;
}).length;
const Fail = batch1.filter(el => {
  return el.Final < 4;
}).length;

export const data = [
  ['RESULT', 'NO OF STUDENTS'],
  ['PASS', Pass],
  ['FAIL', Fail],
];

export const options = {
  title: 'Pass Percentage',
};

export function Pie() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={'43vw'}
      height={'50vh'}
    />
  );
}
