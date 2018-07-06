const request = require("supertest");

jest.mock("../../server/db", () => ({
  getBackgrounds: () =>
    Promise.resolve([
      {
        id: 1,
        title: "Background 1",
        description: "Gallery wall",
        url: "https://i.imgur.com/9hD9lp5.jpg",
        contributor: "Anthony"
      },
      {
        id: 2,
        title: "Background 2",
        description: "Office wall",
        url: "https://i.imgur.com/AagTDTP.jpg",
        contributor: "Anthony"
      }
    ])
}));

const server = require("../../server/server");

test("GET /", () => {
  return request(server)
    .get("/api/v1")
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(2);
    })
    .catch(err => {
      expect(err).toBeFalsy();
    });
});
