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

const ScrollIndicatorDescription = styled.h2`
  font-size: 2em;
  color: var(--color);
  font-weight: 200;
  margin-bottom: calc(var(--vertical-rhytm)/2);
`;

const TargetsContainer = styled.div`
  width: 100%;
  height: 10em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  --color-active: ${props => props.active ? 'orange' : 'black'};
`

const TestRef = ({className, children, handleClick, number, target}) => {
  let ref = null;
  return (
    <div
      ref={(elem) => {ref = elem;}}
      onClick={() => handleClick(ref, target)}
      className={className}>
      {children}
    </div>
  );
}

const StyledTestRef = styled(TestRef)`
  height: 4em;
  width: 4em;
  ${'' /* background-color: ${props => props.active ? 'orange' : 'black'}; */}
  background-color: black;
  margin: 0.5em 0;
  position: relative;
  border-radius: 50%;
  z-index: 1;
  align-self: ${props => props.even ? 'flex-end' : 'auto'};
  ${'' /* transition: background-color 0.2s linear; */}
  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${'' /* height: 66.66%;
    width: 66.66%; */}
    height: ${props => props.active ? '102%' : '66.66%'};
    width: ${props => props.active ? '102%' : '66.66%'};
    background-color: orange;
    z-index: 500;
    border-radius: 50%;
    transition: all 0.1s linear 0.2s;
  }
  &::after {
    position: absolute;
    ${props => `content: '${props.number || 0}';`};
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${props => props.active ? 'black' : 'white'};
    height: 33.33%;
    width: 33.33%;
    background-color: ${props => props.active ? 'orange' : 'black'};
    z-index: 1000;
    border-radius: 50%;
    transition: background-color 0.2s linear,
    color 0.2s linear;
  }
`;

const Page = ({
  showModal,
  coordinates,
  targets,
  active,
  handleClick,
}) => (
  <Wrapper>
    <Container>
      <ScrollIndicatorDescription>Scroll progress: </ScrollIndicatorDescription>
      <TargetsContainer>
        { targets.map((target,i) => (
          <StyledTestRef
            key={target}
            handleClick={handleClick}
            number={i+1}
            target={target}
            even={i%2}
            active={active === target}/>
        ))}
      </TargetsContainer>
    </Container>
  </Wrapper>
);

export default Page;
