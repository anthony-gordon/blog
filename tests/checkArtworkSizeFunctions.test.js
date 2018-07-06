var width = require("./../client/reducers/artworkSizeReducer");

test("increaseWidth return a number 5 greater than the number it was given UNLESS the number it is given is equal to or greater than 400", function() {
  var expected = 205;
  var actual = width.increaseWidth(200);
  expect(actual).toBe(expected);
});

test("increaseWidth return a number 5 greater than the number it was given UNLESS the number it is given is equal to or greater than 400", function() {
  var expected = 400;
  var actual = width.increaseWidth(400);
  expect(actual).toBe(expected);
});

test("increaseWidth return a number 5 greater than the number it was given UNLESS the number it is given is equal to or greater than 400", function() {
  var expected = 400;
  var actual = width.increaseWidth(470);
  expect(actual).toBe(expected);
});

test("decreaseWidth return a number 5 greater than the number it was given UNLESS the number it is given is equal to or greater than 400", function() {
  var expected = 195;
  var actual = width.decreaseWidth(200);
  expect(actual).toBe(expected);
});

test("decreaseWidth return a number 5 greater than the number it was given UNLESS the number it is given is equal to or greater than 400", function() {
  var expected = 50;
  var actual = width.decreaseWidth(50);
  expect(actual).toBe(expected);
});

test("decreaseWidth return a number 5 greater than the number it was given UNLESS the number it is given is equal to or greater than 400", function() {
  var expected = 50;
  var actual = width.decreaseWidth(35);
  expect(actual).toBe(expected);
});
