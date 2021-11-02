import React, { SyntheticEvent } from 'react';
import { IHelperState } from "../../@types/interfaces/hocs";
import "./helper.scss";

function helper(Component: React.ElementType, comment: string) {
  return class ComponentWithHelper extends React.Component<any, IHelperState> {
    constructor(props: any) {
      super(props);
      this.state = { hovered: false };
      this.mouseOut = this.mouseOut.bind(this);
      this.mouseOver = this.mouseOver.bind(this);
    }

    mouseOver(evt: SyntheticEvent) {
      this.setState({ hovered: true });
      evt.stopPropagation();
    }

    mouseOut(evt: SyntheticEvent) {
      this.setState({ hovered: false });
      evt.stopPropagation();
    }

    render() {
      return (
        <div
          className="helper"
          onMouseOut={ this.mouseOut }
          onMouseOver={ this.mouseOver }>

            { this.state.hovered && <div className="helper__text">{ comment }</div>}
            <Component { ...this.props } />

        </div>
      );
    }
  }
}

export default helper;
