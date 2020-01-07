import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import logo from './logo.svg';

function App() {
   return (
      <Container>
         <Header>
            <Logo src={logo} alt="logo" />
            <p>
               *insert early '00s "under construction" gif*
            </p>
         </Header>
      </Container>
   );
}

const logoSpin = keyframes`
   from {
      transform: rotate(0deg);
   }
   to {
      transform: rotate(360deg);
   }
`;

const Container = styled.div`
   text-align: center;
`; 

const Header = styled.header`
   background-color: #282c34;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: calc(10px + 2vmin);
   color: white;
`;

const Logo = styled.img`
   height: 40vmin;
   pointer-events: none;
   @media (prefers-reduced-motion: no-preference) {
      animation: ${logoSpin} infinite 20s linear;
   }
`;

export default App;
