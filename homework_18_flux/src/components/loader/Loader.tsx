import React, { useEffect, useState, useRef } from "react";
import "./Loader.scss";
import loaderStore from "../../stores/loader";

const Loader = () =>  {
  const [ width, setWidth ] = useState(0);
  const isUnmounted = useRef(false);

  useEffect(() => {
    isUnmounted.current = false;
    loaderStore.on("change", () => {
      setWidth(loaderStore.getWidth());
    })

    return () => {
      isUnmounted.current = true;
      loaderStore.removeAllListeners("change");
    };
  }, [width])

  return (
    <div className="loader">
      <div className="loader__box" style={ { width: width } }/>
    </div>
  );
}

export default Loader;
