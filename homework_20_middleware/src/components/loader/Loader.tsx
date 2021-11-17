import "./Loader.scss";
import { connect } from "react-redux";
import { useEffect } from "react";
import { changeLoaderWidthAction } from "../../redux/actions/loader";
import { bindActionCreators } from "redux";

interface ILoaderProps {
  width: number;
  changeLoaderWidth: Function;
}

const Loader = (props: ILoaderProps) =>  {
  const { width, changeLoaderWidth } = props;

  useEffect(() => {
    changeLoaderWidth(0);
  }, [changeLoaderWidth])

  useEffect(() => {
    let id = 0;

    const showLoadingProcess = () => {
      changeLoaderWidth(width < 300 ? width + 1 : 0);
      id = requestAnimationFrame(showLoadingProcess);
    }

    id = requestAnimationFrame(showLoadingProcess);

    return () => {
      cancelAnimationFrame(id);
    };
  }, [changeLoaderWidth, width])

  return (
    <div className="loader">
      <div className="loader__box" style={ { width: width } }/>
    </div>
  );
}

export default connect(
  (state: any) => ({
    width: state.loader.width
  }),
  (dispatch) => ({
    changeLoaderWidth: bindActionCreators(changeLoaderWidthAction, dispatch)
  })
)(Loader);
