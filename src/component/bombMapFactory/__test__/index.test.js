/**
 * @format
 */

import _ from 'lodash/fp';
import Grid from '../index';

describe('Grid', (size = 3) => {
  test('flatmap to be size^', () =>
      expect(Grid(size)).toHaveLength(size ));

  test('all cell have same type', () => {
    _.forEach(
      item =>
        expect(item).toEqual({
          x: expect.any(Number),
          y: expect.any(Number),
        }), _.flatMap(_.identity, Grid(size))
    );
  });
});
