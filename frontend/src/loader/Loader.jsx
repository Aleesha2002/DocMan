import React from 'react';
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
  return (
    <div className="flex item-center justify-center h-full " >
      <HashLoader color="#0067FF" />
    </div>
  )
}

export default Loader
