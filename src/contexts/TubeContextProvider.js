import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { TubeContext } from './TubeContext';

const TubeContextProvider = (props) => {
  const [tubes, setTubes] = useState({});

  return (
    <TubeContext.Provider
      value={{
        tubes,
        setTubes
      }}
    >
      {props.children}
    </TubeContext.Provider>
  );
};

export default TubeContextProvider;