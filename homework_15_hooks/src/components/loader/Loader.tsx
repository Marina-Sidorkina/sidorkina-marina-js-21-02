import React, { useEffect, useState } from "react";
import "./Loader.scss";

const Loader = () =>  {
  const [ width, setWidth ] = useState(0);
  const style = { width: width };
  const isUnmounted = React.useRef(false);

  useEffect(() => {
    let id = 0;

    if (!isUnmounted.current) {
      const showLoadingProcess = () => {
        setWidth(width < 300 ? width + 1 : 0);
        id = requestAnimationFrame(showLoadingProcess);
      }

      id = requestAnimationFrame(showLoadingProcess);
    }

    return () => {
      cancelAnimationFrame(id);
      isUnmounted.current = true;
    };
  }, [width])

  return (
    <div className="loader">
      <div className="loader__box" style={ style }/>
    </div>
  );
}

export default Loader;
