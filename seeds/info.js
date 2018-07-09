exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex("info")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("info").insert([
        {
          id: 1,
          text1: "Mauritius",
          image1: "https://i.imgur.com/5Vkgq9a.jpg",
          text2: "Anthony"
        },
        {
          id: 2,
          text1: "House",
          image1: "https://i.imgur.com/WfWpNZE.jpg",
          text2: "Anthony"
        }
      ]);
    });
};
