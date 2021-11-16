import "./Loader.scss";
import { connect } from "react-redux";
import { useEffect, useRef } from "react";
import { changeLoaderWidthAction } from "../../redux/actions/loader";
import { bindActionCreators } from "redux";

const Loader = (props: any) =>  {
  const { width, changeLoaderWidth } = props;
  const isUnmounted = useRef(false);

  useEffect(() => {
    changeLoaderWidth(0);
  }, [changeLoaderWidth])

  useEffect(() => {
    let id = 0;
    isUnmounted.current = false;

    if (!isUnmounted.current) {
      const showLoadingProcess = () => {
        changeLoaderWidth(width < 300 ? width + 1 : 0);
        id = requestAnimationFrame(showLoadingProcess);
      }

      id = requestAnimationFrame(showLoadingProcess);
    }

    return () => {
      cancelAnimationFrame(id);
      isUnmounted.current = true;
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
    width: state.loader.width,
  }),
  (dispatch) => ({
    changeLoaderWidth: bindActionCreators(changeLoaderWidthAction, dispatch)
  })
)(Loader);
