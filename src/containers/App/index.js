import React from 'react';
import styled from 'styled-components/macro';
import { useEnv } from 'store';

function App() {
   const env = useEnv();

   return (
      <Container>
         <Header>
            <picture>
               <source
                  media="(max-width: 767px)"
                  srcSet={`${env.IMAGES}/profile-m.png`}
               />
               <source
                  media="(max-width: 1024px)"
                  srcSet={`${env.IMAGES}/profile-t.png`}
               />
               <source
                  media="(min-width: 1025px)"
                  srcSet={`${env.IMAGES}/profile-d.png`}
               />
               <img
                  src={`${env.IMAGES}/profile-d.png`}
                  alt="Sai Chimata portrait"
               />
            </picture>
            <p>*insert early '00s "under construction" gif*</p>
         </Header>
      </Container>
   );
}

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

export default App;
