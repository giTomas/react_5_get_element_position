import styled from 'styled-components';
import React from 'react';

import TargetElement from './targetElement';
import Modal, {Orange} from './modal';
import { connect } from 'react-redux';
import actionCreators from '../redux/actionCreators';

const Wrapper = styled.div`
  margin-bottom: 15vh;
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: calc(36rem + (var(--vertical-rhytm) * 2));
  padding-left: var(--vertical-rhytm);
  padding-right: var(--vertical-rhytm);
  padding-top: var(--vertical-rhytm);
`;

const GridContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: calc(54em + (var(--vertical-rhytm) * 2));
  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-columns: 6rem;
  grid-auto-rows: 6rem;
  padding-left: var(--vertical-rhytm);
  padding-right: var(--vertical-rhytm);
  @media(max-width: 1100px ) {
    max-width: calc(42em + (var(--vertical-rhytm) * 2));
  }
  @media(max-width: 550px) {
    max-width: calc(24em + (var(--vertical-rhytm) * 2));
  }
`;

const Description = styled.h2`
  font-size: 2em;
  margin-bottom: calc(var(--vertical-rhytm));
`;

const Button = styled.button`
  font-family: var(--font-family);
  color: var(--font-color);
  font-size: 1em;
  margin-bottom: calc(var(--vertical-rhytm));
  border: none;
  border-radius: 0;
  padding: 0.25em 0.5em;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: background-color 0.25s ease-out,
  box-shadow 0.25s ease-out;
  &:hover {
    background-color: orange;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`;



const Page = ({
  handleGenerateNewGrid,
  showModal,
  handleClick,
  active,
  gridCoords,
}) => (
  <Wrapper>
    <Container>
      <Description>
        Click on the <Orange>Target</Orange> and get his x,y coordinates.
      </Description>
      <Button onClick={handleGenerateNewGrid}>
        New Targets
      </Button>
    </Container>
    <GridContainer>
      {
        gridCoords.map((gridCoord,i) => (
        <TargetElement
          key={`target-${i}`}
          index={i}
          grid={gridCoord} />
        ))
      }

    </GridContainer>
    {
      showModal && <Modal />
    }
  </Wrapper>
);

const mapStateToProps = (state) => ({
  showModal: state.showModal,
  gridCoords: state.gridCoords,
});

const mapDispatchToProps = (dispatch) => ({
  handleGenerateNewGrid: () => {dispatch(actionCreators.updateGridCoords())}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
