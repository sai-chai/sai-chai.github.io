import React from 'react';
import styled from 'styled-components/macro';
import { BackgroundImg } from 'react-cloudimage-responsive';
import useMedia from 'utils/useMedia';
import { breakpoints } from 'styles/breakpoints';

function Navbar(props) {
   const gtMedium = useMedia(`(min-width: ${breakpoints.medium}px)`);
   console.log(gtMedium);
   return (
      <BackgroundImg src="Lift_crop.jpg" params={gtMedium && 'gravity=east&tl_px=0,330'}>
         <Container>

         </Container>
      </BackgroundImg>
   );
}

const Container = styled.nav`
   height: 200px;
`;

export default Navbar;
