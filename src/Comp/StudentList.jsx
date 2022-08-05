import { useState } from 'react';
import Details from './Details';
import batch1 from './batch1';

export default function StudentList({ data }) {
  const [getDet, setGetDet] = useState(true);
  const [x, sX] = useState('');
  const [y, sY] = useState('');
  let bat = batch1.filter(e => e.id === x);

  function bc(el) {
    sY(el);
  }

  const det = () => {
    if (getDet) {
      setGetDet(false);
    } else setGetDet(true);
  };

  function renderStudents(studentData) {
    return studentData.map(
      (
        { id, name, ticket_number, exam_grade, rating_grade, Final, FinalS },
        b
      ) => {
        return (
          <tr
            key={id}
            onClick={() => bc(id)}
            className={id === y ? 'trClicked' : ''}
          >
            <td>{b + 1}</td>
            <td
              onClick={() => bc(id)}
              style={{ textTransform: id === y ? 'uppercase' : '' }}
            >
              {name}
            </td>
            <td>{ticket_number}</td>
            <td>{exam_grade}</td>
            <td>{rating_grade}</td>
            <td>{Final}</td>
            <td>{FinalS ? 'Passed' : 'Failed'}</td>
            <td onClick={e => e.stopPropagation()}>
              <button
                onClick={() => {
                  sX(id);
                  if (getDet) {
                    setGetDet(false);
                  } else setGetDet(true);
                }}
                className="detailsBtn"
              >
                More...
              </button>
            </td>
          </tr>
        );
      }
    );
  }

  return (
    <div>
      <div id="b">
        <table className="f">
          <thead className="tbl-header" onClick={() => bc()}>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Ticket Number</th>
              <th>Exam Grade</th>
              <th>Rating Grade</th>
              <th>final</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody className="tbl-content">{renderStudents(data)}</tbody>
        </table>
      </div>
      <div className="g">
        {getDet || (
          <>
            <Details batch1={bat} />
            <button
              className="closeBtn animate__animated animate__zoomIn"
              onClick={det}
            >
              X
            </button>
          </>
        )}
      </div>
    </div>
  );
}
