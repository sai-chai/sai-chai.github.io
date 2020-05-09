import { mixins } from './breakpoints';

describe('breakpoints and mixins', () => {
   it('mixin works', () => {
      const result = mixins.small`
         margin-right: 1px;
      `;

      expect(result.join('')).toContain('margin-right: 1px');
   });
});
