import styled from 'styled-components';
import React from 'react';

import TargetElement from './targetElement';
import Modal from './modal';

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
  showModal,
  handleCloseModal,
  handleGenerateNewGrid,
  handleClick,
  coordinates,
  active,
  gridCoords,
}) => (
  <Wrapper>
    <Container>
      <Description>
        Click on the Target and get his x,y coordinates.
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
          handleClick={handleClick}
          index={i}
          even={i%2}
          active={active === `target-${i}`}
          grid={gridCoord} />
        ))
      }

    </GridContainer>
    {
      showModal &&
      <Modal
        coordinates={coordinates}
        handleCloseModal={handleCloseModal}
        active={active}
      />
    }
  </Wrapper>
);

export default Page;
