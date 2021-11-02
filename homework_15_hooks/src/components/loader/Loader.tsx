import React, { useEffect, useState } from "react";
import "./Loader.scss";

const Loader = () =>  {
  const [ width, setWidth ] = useState(0);
  const style = {
    width: width
  };
  let id = 0;

  const showLoadingProcess = () => {
    setWidth(width < 300 ? width + 1 : 0);
    id = requestAnimationFrame(showLoadingProcess);
  }

  useEffect(() => {
    id = requestAnimationFrame(showLoadingProcess);
    return () => cancelAnimationFrame(id);
  }, [width])

  return (
    <div className="loader">
      <div className="loader__box" style={ style }/>
    </div>
  );
}

export default Loader;
