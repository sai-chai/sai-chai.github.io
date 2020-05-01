import React from 'react';
import styled from 'styled-components/macro';
import Img from 'react-cloudimage-responsive';

function App() {
   return (
      <Container>
         <Header>
            <Jumbotron>
               <Img src="profile.png" alt="Sai Chimata portrait" ratio={1} />
            </Jumbotron>
            <p>*insert early '00s "under construction" gif*</p>
         </Header>
      </Container>
   );
}

const Container = styled.div`
   text-align: center;
`;

const Jumbotron = styled.div`
   width: 30vw;
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

export default App;
