import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
// import throttle from 'lodash.throttle';
// import actionCreators from './redux/actionCreators';
import Page from './styled/page';
import gridCoordinates from './helpers/cartesian';
// import getGridCoords from './helpers/random';

const getCoordinatesForModal = (coords, target) => ({
  coordinates: {
    x: Math.round(coords.x),
    y: Math.round(coords.y),
    width: coords.width,
    top: Math.round(coords.bottom) || null,
    left: Math.round(coords.left) || null,
    // cssBottom = viewpor.height - coords.y
    bottom: Math.round(coords.bottom) || null,
    // cssRight = viewpport.width - coords.x
    right: Math.round(coords.right) || null,
  },
  active: target,
  showModal: true,
})

class App extends PureComponent {
  constructor(props) {
    super(props);

    const targetNumber = 12;

    this.state = {
      showModal: false,
      coordinates: {
        x: null,
        y: null,
        top: null,
        bottom: null,
        right: null,
        left: null,
      },
      targets: Array.from({length: targetNumber}, (_,i) => `target-${i+1}`),
      // positions: combinations,
      active: null,
      gridCoords: [],
      width: null,
    }
  }

  componentDidMount() {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    // const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    // const gridCoords = getGridCoords(this.state.positions, 12)
    const gridCoords = gridCoordinates(width)
    this.setState({gridCoords, width});

    window.addEventListener('resize', () => {
      console.log('resized')});
  }

  componentWillUnmount() {
    window.addEventListener('resize', () => {console.log('resized')});
  }

  handleClickOnTarget = (ref, target) => {
    const coords = ref.getBoundingClientRect();
    // this.setState({
    //   coordinates: {
    //     x: Math.round(coords.x),
    //     y: Math.round(coords.y),
    //     width: coords.width,
    //     top: Math.round(coords.bottom) || null,
    //     left: Math.round(coords.left) || null,
    //     // cssBottom = viewpor.height - coords.y
    //     bottom: Math.round(coords.bottom) || null,
    //     // cssRight = viewpport.width - coords.x
    //     right: Math.round(coords.right) || null,
    //   },
    //   active: target,
    //   showModal: true,
    // });
    this.setState(getCoordinatesForModal(coords, target))
  }

  handleWindowResize = () => {

  }

  handleGenerateNewGrid = () => {
    // const gridCoords = getGridCoords(this.state.positions)
    // this.setState({
    //   gridCoords,
    //   showModal: false,
    //   active: null,
    // });
    // console.log(comb(this.state.width))
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    // const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    // const gridCoords = getGridCoords(this.state.positions, 12)
    const gridCoords = gridCoordinates(width)
    this.setState({gridCoords, width});
    console.log(width)
  }

  handleCloseModal = () => {
    this.setState({showModal: false, active: null})
  }

  render() {
    return (
      <Page
        {...this.state}
        handleClick={this.handleClickOnTarget}
        handleCloseModal={this.handleCloseModal}
        handleGenerateNewGrid={this.handleGenerateNewGrid}
      />
    );
  }
}

export default App;
