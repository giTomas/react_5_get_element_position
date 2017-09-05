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
  max-width: 900px;
  padding: var(--vertical-rhytm);
`;

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  ${'' /* grid-auto-columns: 100px; */}
  grid-auto-rows: 5em;

  @media(max-width: 25em) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media(max-width: 20em) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media(max-width: 15em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Description = styled.h2`
  font-size: 2em;
  margin-bottom: calc(var(--vertical-rhytm)*2);
`;


const Page = ({
  showModal,
  handleCloseModal,
  coordinates,
  targets,
  active,
  handleClick,
}) => (
  <Wrapper>
    <Container>
      <Description>
        Click on the Target and get his x,y coordinates.
      </Description>
      <GridContainer>
        {
          targets.map((target,i) => (
          <TargetElement
            key={target}
            handleClick={handleClick}
            number={i+1}
            target={target}
            even={i%2}
            active={active === target}/>
          ))
        }

      </GridContainer>
      {
        showModal &&
        <Modal
          coordinates={coordinates}
          handleCloseModal={handleCloseModal}>
        </Modal>
      }
    </Container>
  </Wrapper>
);

export default Page;
