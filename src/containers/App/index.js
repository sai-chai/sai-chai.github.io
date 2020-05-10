import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Img from 'react-cloudimage-responsive';
import { mixins } from 'styles/breakpoints';
import Header from 'components/Header';
import Navbar from 'components/Navbar';

function App() {
   return (
      <Router>
         <Container>
            <Header />
            <Navbar />
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

export default App;
