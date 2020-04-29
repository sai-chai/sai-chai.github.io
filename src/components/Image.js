import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import useEnv from 'store';

/**
 * Does the gruntwork to display responsive images
 */
const ImageSrcSet = props => {
   const { filename, ext, alt } = props;
   const env = useEnv();

   return (
      <picture>
         <source
            media="(max-width: 767px)"
            srcSet={`${env.IMAGES}/${filename}-m.${ext}`}
         />
         <source
            media="(max-width: 1023px)"
            srcSet={`${env.IMAGES}/${filename}-t.${ext}`}
         />
         <source
            media="(min-width: 1024px)"
            srcSet="https://aavqcajllo.cloudimg.io/v7/_saichai_/profile-d.png"
         />
         <img src={`${env.IMAGES}/${filename}-d.${ext}`} alt={alt} />
      </picture>
   );
};

ImageSrcSet.propTypes = {
   filename: PropTypes.string,
   ext: PropTypes.string,
   alt: PropTypes.string,
};

export default styled(ImageSrcSet)`
   text-align: center;
`;
