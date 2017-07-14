import { connect } from 'react-redux';
import { changeBottomBar } from '../../Redux/Action/index';
import bottomBar from './bottomBar';

const mapStateToProps = (state) => {
  return {
    bottomChoose: state.bottomChoose
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeBottomBar: (bottomChoose) => {
      dispatch(changeBottomBar(bottomChoose));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(bottomBar);