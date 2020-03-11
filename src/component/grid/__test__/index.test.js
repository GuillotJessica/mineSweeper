/**
 * @format
 */

import _ from 'lodash/fp';
import Grid from '../../grid';

describe('Grid', (size = 30) => {
  test('to be', () => {
    expect(Grid(size).length).toEqual(size);
  });

  test('flatmap to be size^', () =>
    expect(_.flatMap(_.identity, Grid(size))).toHaveLength(size * size));

  test('all cell have same type', () => {
    _.forEach(
      item =>
        expect(item).toEqual({
          x: expect.any(Number),
          y: expect.any(Number),
        }),
      _.flatMap(_.identity, Grid(size))
    );
  });
});
