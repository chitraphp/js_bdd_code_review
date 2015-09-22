var bottleCounter = function(noOfBottles) {
  var beerSong = [];
  var string = "";
  //alert(noOfBottles);
  for(var i=noOfBottles;i>=0;i--) {
    //alert(i);
    if(i === 0) {
      string = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more,"+ noOfBottles +" bottles of beer on the wall.";
    } else if (i === 1) {
      string = "1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, 0 bottles of beer on the wall.";
    } else {
      string = i +"bottles of beer on the wall,"+ i+" bottles of beer. Take one down and pass it around,"+ i-1+" bottles of beer on the wall.";
    }
    beerSong.push(string);
  }
        return beerSong;

};
