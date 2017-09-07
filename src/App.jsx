import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Page from './styled/page';
import getGridCoords from './grid/';
import debounce from 'lodash.debounce';
import actionCreators from './redux/actionCreators';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      coordinates: {
        x: null,
        y: null,
      },
      active: null,
      gridCoords: [],
      width: null,
    }
  }

  componentDidMount() {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const gridCoords = getGridCoords(width)
    this.setState({gridCoords, width});
    console.log(width);
    this.props.updateWindowWidth(width);

    window.addEventListener('resize', debounce(this.handleWindowResize, 100));
  }

  componentWillUnmount() {
    window.addEventListener('resize', debounce(this.handleWindowResize, 100));
  }

  handleClickOnTarget = (ref, target) => {
    const coords = ref.getBoundingClientRect();

    this.props.updateXYCoords(coords);
    this.props.setActive(target);
    // console.log(coords);
    this.setState({
      coordinates: {
        x: Math.round(coords.left),
        y: Math.round(coords.top),
      },
      active: target,
      showModal: true,
    })
  }

  handleWindowResize = () => {
    const width = Math.max(document.documentElement.clientWidth);
    this.props.updateWindowWidth(width);


    const gridCoords = getGridCoords(width)
    this.setState({gridCoords, width});
  }

  handleGenerateNewGrid = () => {
    this.props.updateGridCoords()

    const gridCoords = getGridCoords(this.state.width);
    this.setState({gridCoords, active: null, showModal: false});
  }

  handleCloseModal = () => {
    this.props.closeModal();
    this.setState({showModal: false, active: null})
  }

  render() {
    return (
      <Page
        {...this.state}
        handleClick={this.handleClickOnTarget}
        handleGenerateNewGrid={this.handleGenerateNewGrid}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  updateWindowWidth: (wWidth) => {dispatch(actionCreators.updateWindowWidth(wWidth))},
  closeModal: () => {dispatch(actionCreators.closeModal())},
  setActive: (target) => {dispatch(actionCreators.setActive(target))},
  updateXYCoords: (coords) => {dispatch(actionCreators.updateXYCoords(coords))},
  updateGridCoords: () => {dispatch(actionCreators.updateGridCoords())}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
