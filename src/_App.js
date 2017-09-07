import React, { PureComponent } from 'react';
import Page from './styled/page';
import getGridCoords from './grid/';
import debounce from 'lodash.debounce';

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

    window.addEventListener('resize', debounce(this.handleWindowResize, 100));
  }

  componentWillUnmount() {
    window.addEventListener('resize', debounce(this.handleWindowResize, 100));
  }

  handleClickOnTarget = (ref, target) => {
    const coords = ref.getBoundingClientRect();
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
    const gridCoords = getGridCoords(width)
    this.setState({gridCoords, width});
  }

  handleGenerateNewGrid = () => {
    const gridCoords = getGridCoords(this.state.width)
    this.setState({gridCoords, active: null, showModal: false});
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
