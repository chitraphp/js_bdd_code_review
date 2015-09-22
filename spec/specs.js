describe('bottleCounter', function() {
  var stringForOne = "1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, 0 bottles of beer on the wall.";
  it("user inputs 1 ", function() {
    var noOfBottles = 1;
    var lastString = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more,"+ noOfBottles +" bottles of beer on the wall.";
    expect(bottleCounter(noOfBottles)[1]).to.eql(lastString);
    expect(bottleCounter(noOfBottles)[0]).to.eql(stringForOne);
  });

  it("takes input 5 ", function() {
    var noOfBottles = 5;
    var lastString = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more,"+ noOfBottles +" bottles of beer on the wall.";
    var firstString = noOfBottles +"bottles of beer on the wall,"+ noOfBottles+" bottles of beer. Take one down and pass it around,"+ noOfBottles-1+ " bottles of beer on the wall.";
    expect(bottleCounter(noOfBottles)[0]).to.eql(firstString);
    //expect(bottleCounter(noOfBottles)[0]).to.have.string(5);
  });


});
