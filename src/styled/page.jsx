import styled from 'styled-components';
import React from 'react';

import TargetElement from './targetElement';
import Modal from './modal';

const Wrapper = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: calc(44rem + (var(--vertical-rhytm) * 2));
  padding: var(--vertical-rhytm);
`;

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-columns: 5.5rem;
  grid-auto-rows: 5.5rem;

`;

const Description = styled.h2`
  font-size: 2em;
  margin-bottom: calc(var(--vertical-rhytm));
`;

const NewGridButton = styled.button`
  font-family: var(--font-family);
  color: var(--font-color);
  font-size: 1em;
  margin-bottom: calc(var(--vertical-rhytm)*2);
  border: 1px solid black;
  border-radius: 0;
  padding: 0.25em 0.5em;
`;


const Page = ({
  showModal,
  handleCloseModal,
  handleGenerateNewGrid,
  coordinates,
  targets,
  active,
  handleClick,
  gridCoords,
}) => (
  <Wrapper>
    <Container>
      <Description>
        Click on the Target and get his x,y coordinates.
      </Description>
      <NewGridButton onClick={handleGenerateNewGrid}>
        New Grid
      </NewGridButton>
      <GridContainer>
        {
          gridCoords.map((gridCoord,i) => (
          <TargetElement
            key={`target-${i}`}
            handleClick={handleClick}
            number={i+1}
            target={`target-${i}`}
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
    </Container>
  </Wrapper>
);

export default Page;
