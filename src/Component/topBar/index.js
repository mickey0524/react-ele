import { connect } from 'react-redux';
import { changeTopBar } from '../../Redux/Action/Index';
import topBar from './topBar.jsx';

const mapStateToProps = (state) => {
  return {
    topBar: state.topBar
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTopBar: (topBar) => {
      dispatch(changeTopBar(topBar));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(topBar);