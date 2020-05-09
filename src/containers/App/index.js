import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Img from 'react-cloudimage-responsive';
import { mixins } from 'styles/breakpoints';

function App() {
   return (
      <Router>
         <Container>
            <Header>
               <Title>Sai Chimata</Title>
               <Subtitle>Front-end Engineer</Subtitle>
            </Header>
         </Container>
      </Router>
   );
}

const Container = styled.div`
   background: linear-gradient(280deg, #ffffff 50%, #a19490);
   background: -webkit-linear-gradient(280deg, #ffffff 50%, #a19490);
   background-attachment: fixed;
   min-height: 100vh;
   width: 100vw;
`;

const Header = styled.header`
   background: none;
   margin: 0 auto;
   height: 32px;
   ${mixins.medium`
      height: 50px;
      margin: 0 32px;
      display: flex;
      flex-direction: row;
      align-items: center;
      align-content: center;
      justify-content: space-between;
   `}
   ${mixins.large`
      margin: 0 64px;
   `}
   ${mixins.xLarge`
      margin: 0 128px;
   `}
`;

const Title = styled.h1`
   text-align: center;
   font-size: 1.2rem;
   line-height: 32px;
   ${mixins.medium`
      line-height: initial;
      font-size: 1.5rem;
   `}
   ${mixins.large`
      font-size: 1.8rem;
   `}
`;

const Subtitle = styled.p`
   display: none;
   ${mixins.medium`
      display: initial;
      font-size: 1rem;
      font-weight: 550;
   `}
   ${mixins.large`
      font-size: 1.2rem;
   `}
`;

export default App;
