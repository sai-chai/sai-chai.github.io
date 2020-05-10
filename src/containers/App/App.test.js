import React from 'react';
import { render } from '@testing-library/react';
import App from './index';
import { CloudimageProvider } from 'react-cloudimage-responsive';
jest.mock('utils/useMedia');

describe('<App />', () => {
   test('renders learn react link', () => {
      const { getByText } = render(
         <CloudimageProvider>
            <App />
         </CloudimageProvider>,
      );
      const linkElement = getByText(/Front-end Engineer/i);
      expect(linkElement).toBeInTheDocument();
   });
});
