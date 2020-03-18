import _ from 'lodash/fp';
import {displayCells, surroundingCells, plantBombs} from '../index';

describe('plantBombs', () =>{
    const tableau = [[{x:0, y:0}, {x:1, y:0}, {x:2, y:0}],
        [{x:0, y:1}, {x:1, y:1}, {x:2, y:1}],
        [{x:0, y:2}, {x:1, y:2}, {x:2, y:2}]];

    const flatMapTableau = _.flatMap(_.identity,plantBombs(tableau,3, {x:0, y:0} ));
    test('to have size number of omb', () => {
        // _________
        // |__|__|__|
        // |__|__|x|
        // |__|__|__|
        expect(_.filter('isBomb',flatMapTableau).length).toEqual(3);
    });
    test('to have size array length', () => {
        // _________
        // |__|__|__|
        // |__|__|x|
        // |__|__|__|
        expect(flatMapTableau.length).toEqual(9);
    });
});

describe('surroundingCells', () =>{
    const tableau = [[{x:0, y:0}, {x:1, y:0}, {x:2, y:0}],
        [{x:0, y:1}, {x:1, y:1}, {x:2, y:1}],
        [{x:0, y:2}, {x:1, y:2}, {x:2, y:2}]];

    test('to be surrounded by 5 cells', () => {
        // _________
        // |__|__|__|
        // |__|__|x|
        // |__|__|__|
        expect(surroundingCells(tableau, 3, {x:2, y:1}).length).toEqual(5);
        expect(surroundingCells(tableau, 3, {x:2, y:1})).toEqual([{x:1, y:0}, {x:2, y:0},{x:1, y:1},{x:1, y:2},{x:2, y:2}]);
    });
    test('to be surrounded by 3 cells', () => {
        // _________
        // |__|__|x|
        // |__|__|__|
        // |__|__|__|
        expect(surroundingCells(tableau, 3, {x:2, y:0}).length).toEqual(3);
        expect(surroundingCells(tableau, 3, {x:2, y:0})).toEqual([{x:1, y:0}, {x:1, y:1}, {x:2, y:1}]);
    });
    test('to be surrounded by 8 cells', () => {
        // _________
        // |__|__|__|
        // |__|x|__|
        // |__|__|__|
        expect(surroundingCells(tableau, 3, {x:1, y:1}).length).toEqual(8);
        expect(surroundingCells(tableau, 3, {x:1, y:1})).toEqual([{x:0, y:0},{x:1, y:0},{x:2, y:0}, {x:0, y:1},{x:2, y:1},{x:0, y:2},{x:1, y:2},{x:2, y:2}]);
    });
});

describe('displayCells', () => {
    test('if cell has 2 bombs around', () => {
        const grid = [[{x:0, y:0, isBomb:true}, {x:1, y:0, isBomb:true}, {x:2, y:0}],
            [{x:0, y:1}, {x:1, y:1}, {x:2, y:1}],
            [{x:0, y:2}, {x:1, y:2}, {x:2, y:2}]];
        expect(displayCells(grid, 3, {x:0, y:1}))
            .toEqual([[{x:0, y:0, isBomb:true}, {x:1, y:0, isBomb:true}, {x:2, y:0}],
                [{x:0, y:1, isRevealed:true, bombsAroundCount:2}, {x:1, y:1}, {x:2, y:1}],
                [{x:0, y:2}, {x:1, y:2}, {x:2, y:2}]]);
    });
    test('if cell has 1 bomb around', () => {
        const grid = [[{x:0, y:0, isBomb:true}, {x:1, y:0}, {x:2, y:0}],
            [{x:0, y:1}, {x:1, y:1}, {x:2, y:1}],
            [{x:0, y:2}, {x:1, y:2}, {x:2, y:2}]];
        expect(displayCells(grid, 3, {x:0, y:1}))
            .toEqual([[{x:0, y:0, isBomb:true}, {x:1, y:0}, {x:2, y:0}],
                [{x:0, y:1, isRevealed:true, bombsAroundCount:1}, {x:1, y:1}, {x:2, y:1}],
                [{x:0, y:2}, {x:1, y:2}, {x:2, y:2}]]);
    });
    test('if cell has 0 bomb around', () => {
        const grid = [[{x:0, y:0}, {x:1, y:0}, {x:2, y:0}],
            [{x:0, y:1}, {x:1, y:1}, {x:2, y:1}],
            [{x:0, y:2}, {x:1, y:2}, {x:2, y:2}]];
        expect(displayCells(grid, 3, {x:0, y:1}))
            .toEqual([[{x:0, y:0}, {x:1, y:0}, {x:2, y:0}],
                [{x:0, y:1, isRevealed:true, bombsAroundCount:0}, {x:1, y:1}, {x:2, y:1}],
                [{x:0, y:2}, {x:1, y:2}, {x:2, y:2}]]);
    });

});
