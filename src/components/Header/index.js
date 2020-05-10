import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { mixins } from 'styles/breakpoints';

function Header(props) {
   return (
      <Container>
         <Link to="/">
            <Title>Sai Chimata</Title>
         </Link>
         <Subtitle>Front-end Engineer</Subtitle>
      </Container>
   );
}

const Container = styled.header`
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
   font-size: 1.4rem;
   line-height: 32px;
   &:hover {
      text-decoration: underline;
   }
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

export default Header;
