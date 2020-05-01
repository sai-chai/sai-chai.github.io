// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

// Necessary to render Img component from 'react-cloudimage-responsive'
// getBoundingClientRect from JSDOM only returns zeroes
Element.prototype.getBoundingClientRect = jest.fn(() => {
   return {
      width: 400,
      height: 400,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
   };
});
