import {
  makeTheArtworkSmaller,
  makeTheArtworkBigger
} from "../../../client/actions/artworks";

test("makeTheArtworkSmaller works", () => {
  const width = 10;

  const expected = {
    type: "MAKE_ARTWORK_SMALLER",
    width
  };

  const actual = makeTheArtworkSmaller(width);

  expect(actual).toEqual(expected);
});

test("makeTheArtworkBigger works", () => {
  const width = 10;

  const expected = {
    type: "MAKE_ARTWORK_BIGGER",
    width
  };

  const actual = makeTheArtworkBigger(width);

  expect(actual).toEqual(expected);
});
