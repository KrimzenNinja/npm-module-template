import add from '../src/index';
describe('Example Test', function() {
    it('Should add 1 and 1 to get 2', function() {
        expect(add(1, 1)).to.equal(2);
    });
});
