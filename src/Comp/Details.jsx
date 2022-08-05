export default function Details({ batch1 }) {
  function renderDetails(stuDetails) {
    return stuDetails.map(
      ({
        id,
        name,
        ticket_number,
        ticket_topic,
        comments,
        exam_grade,
        rating_grade,
        Final,
        FinalS,
      }) => {
        return (
          <tbody key={id}>
            <tr>
              <td colSpan="1">ID : </td>
              <td colSpan="1">{id}</td>
              <td id="k" colSpan="2" rowSpan="7">
                <img
                  src={'pics/' + id + '.png'}
                  alt="NO_PHOTO"
                  width="150vw"
                  height="150vh"
                ></img>
              </td>
            </tr>

            <tr>
              <td colSpan="1">Name : </td>
              <td colSpan="1">{name}</td>
            </tr>

            <tr>
              <td>Ticket no : </td>
              <td>{ticket_number}</td>
            </tr>

            <tr>
              <td>Course : </td>
              <td>{ticket_topic}</td>
            </tr>

            <tr>
              <td>Batch : </td>
              <td>{comments}</td>
            </tr>

            <tr>
              <td>Exam Grade : </td>
              <td>{exam_grade}</td>
            </tr>

            <tr>
              <td>Rating Grade :</td>
              <td>{rating_grade}</td>
            </tr>

            <tr>
              <td>Final Grade : </td>
              <td>{Final}</td>
              <td>Status :</td>
              <td>{FinalS ? 'Passed' : 'Failed'}</td>
            </tr>
          </tbody>
        );
      }
    );
  }

  return (
    <div id="detailsMain">
      <div className="detailsTable animate__animated animate__zoomIn animate__faster">
        <table>
          <thead className="tblHead">
            <tr>
              <th colSpan="4">Student Details</th>
            </tr>
          </thead>
          {renderDetails(batch1)}
        </table>
      </div>
    </div>
  );
}
