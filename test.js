var expect = chai.expect;
var should = chai.should();

describe('getArray', function() {
  it('should be a function', function() {
    expect(getArray).to.be.a('function');
  });
  it('should return the sum of all square roots of the array rounded to the nearest hundredth', function() {
    expect(sumOfSqRts).to.equal(8.38);
  })
});
