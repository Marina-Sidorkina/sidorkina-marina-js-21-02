import React, {SyntheticEvent, useState} from 'react';
import "./helper.scss";

function helper(Component: React.ElementType, comment: string) {
  return (props: any) => {
    const [ hovered, setHovered ] = useState(false);

    const mouseOver = (evt: SyntheticEvent) => {
      setHovered(true)
      evt.stopPropagation();
    }

    const mouseOut = (evt: SyntheticEvent) => {
      setHovered(false)
      evt.stopPropagation();
    }

    return (
      <div
        className="helper"
        onMouseOut={ mouseOut }
        onMouseOver={ mouseOver }>

        { hovered && <div className="helper__text">{ comment }</div>}
        <Component { ...props } />

      </div>
    );
  }

}

export default helper;
