import { css } from 'styled-components/macro';

const small = 426;

const medium = 768;

const large = 1024;

const xLarge = 1440;

const breakpoints = {
   small,
   medium,
   large,
   xLarge,
};

/**
 * @description Standard responsive mixin factory for styled-components, adapted from:
 * @author Tobias Lindström (gunnarx2)
 * @source [link](https://tobbelindstrom.com/blog/how-to-create-a-breakpoint-mixin-with-styled-components/)
 */
const mixins = Object.keys(breakpoints).reduce((accumulator, label) => {
   accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}px) {
         ${css(...args)};
      }
   `;
   return accumulator;
}, {});

export { breakpoints, mixins };
