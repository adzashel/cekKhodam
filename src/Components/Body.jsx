import React from "react";
import Loader from "./Loader";
import Result from "./Result";
import ResetButton from "./ResetButton";


const Body = ({ name, onReset, result, loading }) => {
  return (
    <>
      {loading && (
        <Loader/>
      )}
      {result && (
       <Result name={ name } result={ result }/>
      )}
      <ResetButton onReset={ onReset } result={ result }/>
    </>
  );
};

export default Body;
