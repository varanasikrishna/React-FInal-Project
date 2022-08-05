import React from 'react';
import { Chart } from 'react-google-charts';
import batch1 from './batch1';

const c1 = batch1.filter(el => {
  return el.Final <= 3;
}).length;
const c2 = batch1.filter(el => {
  return el.Final > 3 && el.Final <= 6;
}).length;
const c3 = batch1.filter(el => {
  return el.Final > 6 && el.Final <= 9;
}).length;
const c4 = batch1.filter(el => {
  return el.Final >= 10;
}).length;

export const data = [
  ['Grade', 'Student Count', { role: 'style' }],
  ['0-3', c1, 'color:red'],
  ['4-6', c2, 'color:orange'],
  ['7-9', c3, 'color: blue'],
  ['10', c4, 'color: green'],
];

export function Bar() {
  return (
    <Chart chartType="ColumnChart" width="50vw" height="50vh" data={data} />
  );
}
