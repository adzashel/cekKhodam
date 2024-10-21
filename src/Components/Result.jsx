import React from "react";

const Result = ({ name , result }) => {
  return (
    <>
      <div className="result">
        <p>Khodam { name } hari ini adalah</p>
        <br />
        <h2>{result.name}</h2>
      </div>
    </>
  );
};

export default Result;
