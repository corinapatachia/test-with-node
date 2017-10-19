const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add 2 numbers', () => {
            var res = utils.add(33,11);
        
            expect(res).toBe(44).toBeA('number');
            
        });
    });
   
    
    //async testing
    it('should async add 2 numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    //async aquare
    it('should async square a number', (done) => {
        utils.asyncSquare(3, (square) => {
            expect(square).toBe(9).toBeA('number');
            done();
        })
    });
    
    it('should square a number', () => {
        var res = utils.square(3);
        expect(res).toBe(9).toBeA('number');
    });
});



it('should very first and last names are set', () => {
    var user = {
        age: 29
    };
    var res = utils.setName(user, 'Diana Reddit');
    expect(res).toBeA('object');
    expect(user).toEqual(res);
    expect(res.firstName).toBe('Diana').toBeA('string');
});