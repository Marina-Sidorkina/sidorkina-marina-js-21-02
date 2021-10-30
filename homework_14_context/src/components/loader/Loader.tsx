import React from "react";
import "./Loader.css";
import { ILoaderState } from "../../@types/interfaces/components";

class Loader extends React.Component<{}, ILoaderState> {
  private id: any;

  constructor(props: {}) {
    super(props);

    this.state = {
      width: 0
    }

    this.id = null;
    this.showLoadingProcess = this.showLoadingProcess.bind(this)
  }

  componentDidMount() {
    this.id = requestAnimationFrame(this.showLoadingProcess);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.id);
  }

  showLoadingProcess() {
    if (this.state.width < 300) {
      this.setState(({ width }) => ({ width: width + 1 }));
      this.id = requestAnimationFrame(this.showLoadingProcess);
    } else {
      this.setState({ width: 0 });
      this.id = requestAnimationFrame(this.showLoadingProcess);
    }
  }

  render() {
    const style = {
      width: this.state.width
    }
    return (
      <div className="loader">
        <div className="loader__box" style={ style }/>
      </div>
    );
  }
}

export default Loader;
