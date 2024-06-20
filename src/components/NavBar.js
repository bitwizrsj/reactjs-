import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import US from './US';
import UE from './UE';

// Keyframes for fade in and fade out animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #f8f9fa;
  padding: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  gap: 10px;
`;

const NavItem = styled.li`
  list-style: none;
`;

const NavBtn = styled.button`
  display: block;
  padding: 0.75rem 1rem;
  background-color: ${props => (props.active ? '#007bff' : '#e2e6ea')};
  color: ${props => (props.active ? 'white' : '#000')};
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  border: none;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const ContentWrapper = styled.div`
  animation: ${props => (props.fadeType === 'in' ? fadeIn : fadeOut)} 0.5s forwards;
`;

export default function NavBar() {
  const [visibleComponent, setVisibleComponent] = useState('US');
  const [fadeType, setFadeType] = useState('in');

  const handleComponentChange = (component) => {
    setFadeType('out');
    setTimeout(() => {
      setVisibleComponent(component);
      setFadeType('in');
    }, 500);
  };

  return (
    <>
      <Nav>
        <NavList>
          <NavItem>
            <NavBtn
              active={visibleComponent === 'US'}
              onClick={() => handleComponentChange('US')}
            >
              useState
            </NavBtn>
          </NavItem>
          <NavItem>
            <NavBtn
              active={visibleComponent === 'UE'}
              onClick={() => handleComponentChange('UE')}
            >
              useEffect
            </NavBtn>
          </NavItem>
        </NavList>
      </Nav>
      <ContentWrapper fadeType={fadeType}>
        {visibleComponent === 'US' && <US />}
        {visibleComponent === 'UE' && <UE />}
      </ContentWrapper>
    </>
  );
}
