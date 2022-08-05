import batch2 from './stuData/batch2';

let batch1;
batch1 = batch2;
batch1.forEach(el => {
  el['Final'] = Math.round(0.6 * el.exam_grade + 0.4 * el.rating_grade);
  el['FinalS'] = el.Final >= 4;
});
export default batch1;
