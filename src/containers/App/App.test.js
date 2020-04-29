import React from 'react';
import { render } from '@testing-library/react';
import App from './index';
import { CloudimageProvider } from 'react-cloudimage-responsive';

describe('<App />', () => {
   beforeEach(() => {
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
   });

   test('renders learn react link', () => {
      const { getByText } = render(
         <CloudimageProvider>
            <App />
         </CloudimageProvider>,
      );
      const linkElement = getByText(/under construction/i);
      expect(linkElement).toBeInTheDocument();
   });
});
