const request = require("supertest");

const testEnv = require("./test-environment");
const db = require("../../server/db");

let testDb = null;

beforeEach(() => {
  testDb = testEnv.getTestDb();
  return testEnv.initialise(testDb);
});

afterEach(() => testEnv.cleanup(testDb));

test("getBackgrounds gets all backgrounds", () => {
  const expected = 4;
  return db
    .getBackgrounds(testDb)
    .then(backgrounds => {
      const actual = backgrounds.length;
      expect(actual).toBe(expected);
    })
    .catch(err => expect(err).toBeNull());
});

test("getArtworks gets all artworks", () => {
  const expected = 6;
  return db
    .getArtworks(testDb)
    .then(artworks => {
      const actual = artworks.length;
      expect(actual).toBe(expected);
    })
    .catch(err => expect(err).toBeNull());
});
