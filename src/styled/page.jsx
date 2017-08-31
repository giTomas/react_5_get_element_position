import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  height: 500vh;
  background-image: repeating-linear-gradient(#11e5f3, #11e5f3 2em, #ccf9fc 2em, #ccf9fc 4em);
`;

const Container = styled.div`
  --color: #f31174;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255,255,255,0.95);
  min-width: 60%;
  padding: var(--vertical-rhytm);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.35);
  @media(max-width: 650px) {
    min-width: 90%;
  }
`;

const ScrollIndicator = styled.div.attrs({
  scale: props => (props.progress / 100 ) || 0,
})`
  background-color: var(--color);
  height: 1em;
  transform: scaleX(${props => props.scale});
  transform-origin: left;
`;

const ScrollIndicatorDescription = styled.h2`
  font-size: 2em;
  color: var(--color);
  font-weight: 200;
  margin-bottom: calc(var(--vertical-rhytm)/2);
`;

const Page = ({
  showModal,
  coordinates,
  targets,
  active
}) => (
  <Wrapper>
    <Container>
      <ScrollIndicatorDescription>Scroll progress: </ScrollIndicatorDescription>
      <ScrollIndicator/>
    </Container>
  </Wrapper>
);

export default Page;
