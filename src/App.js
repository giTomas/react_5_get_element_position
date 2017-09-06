import React, { PureComponent } from 'react';
import Page from './styled/page';
import getGridCoords from './helpers/grid';
import debounce from 'lodash.debounce';

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
    const gridCoords = getGridCoords(width)
    this.setState({gridCoords, width});

    window.addEventListener('resize', debounce(this.handleWindowResize, 100));
  }

  componentWillUnmount() {
    window.addEventListener('resize', debounce(this.handleWindowResize, 100));
  }

  handleClickOnTarget = (ref, target) => {
    const coords = ref.getBoundingClientRect();
    this.setState(getCoordinatesForModal(coords, target))
  }

  handleWindowResize = () => {
    const width = Math.max(document.documentElement.clientWidth);
    const gridCoords = getGridCoords(width)
    this.setState({gridCoords, width});
  }

  handleGenerateNewGrid = () => {
    const gridCoords = getGridCoords(this.state.width)
    this.setState({gridCoords});
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
