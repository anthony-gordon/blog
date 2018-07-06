var backgroundIndex = require("./../client/reducers/backgroundIndexReducer");
var artworkIndex = require("./../client/reducers/artworkIndexReducer");

//Background Index tests

test("Tests whether the function goUpThroughBackgroundIndex return an index number one greater than the index number it was given in a case where the index number it was given is not the last index number in the array of index numbers", function() {
  var expected = 3;
  var actual = backgroundIndex.goUpThroughBackgroundIndex(2, [
    0,
    1,
    2,
    3,
    4,
    5
  ]);
  expect(actual).toBe(expected);
});

test("Tests whether the function goUpThroughBackgroundIndex returns an index number of 0 when it is given the last index number in the array of index numbers ", function() {
  var expected = 0;
  var actual = backgroundIndex.goUpThroughBackgroundIndex(5, [
    0,
    1,
    2,
    3,
    4,
    5
  ]);
  expect(actual).toBe(expected);
});

test("Tests whether the function goDownThroughBackgroundIndex return an index number one les than the index number it was given in a case where the index number it was given is not the first index number in the array of index numbers", function() {
  var expected = 1;
  var actual = backgroundIndex.goDownThroughBackgroundIndex(2, [
    0,
    1,
    2,
    3,
    4,
    5
  ]);
  expect(actual).toBe(expected);
});

test("Tests whether the function goDownThroughBackgroundIndex returns an index number of 0 when it is given the last index number in the array of index numbers ", function() {
  var expected = 5;
  var actual = backgroundIndex.goDownThroughBackgroundIndex(0, [
    0,
    1,
    2,
    3,
    4,
    5
  ]);
  expect(actual).toBe(expected);
});

//Artwork Index tests

test("Tests whether the function goUpThroughArtworkIndex return an index number one greater than the index number it was given in a case where the index number it was given is not the last index number in the array of index numbers", function() {
  var expected = 3;
  var actual = artworkIndex.goUpThroughArtworkIndex(2, [0, 1, 2, 3, 4, 5]);
  expect(actual).toBe(expected);
});

test("Tests whether the function goUpThroughArtworkIndex returns an index number of 0 when it is given the last index number in the array of index numbers ", function() {
  var expected = 0;
  var actual = artworkIndex.goUpThroughArtworkIndex(5, [0, 1, 2, 3, 4, 5]);
  expect(actual).toBe(expected);
});

test("Tests whether the function goDownThroughArtworkIndex return an index number one les than the index number it was given in a case where the index number it was given is not the first index number in the array of index numbers", function() {
  var expected = 1;
  var actual = artworkIndex.goDownThroughArtworkIndex(2, [0, 1, 2, 3, 4, 5]);
  expect(actual).toBe(expected);
});

test("Tests whether the function goDownThroughArtworkIndex returns an index number of 0 when it is given the last index number in the array of index numbers ", function() {
  var expected = 5;
  var actual = artworkIndex.goDownThroughArtworkIndex(0, [0, 1, 2, 3, 4, 5]);
  expect(actual).toBe(expected);
});
