import React from 'react';
// import Bar1 from './Bar1';
export default function Footer() {
  let current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div id="footer">
      <div id="l">
        {/* <Bar1 /> */}
        Date:{date}
        <br></br>Signature:{' '}
      </div>
      <p>
        ©Copyrights 2022: Team Code Warriors- COE Epam gloabal Front End Batch 1
      </p>
    </div>
  );
}
