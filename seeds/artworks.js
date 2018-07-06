exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex("artworks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("artworks").insert([
        {
          id: 1,
          title: "Mauritius",
          url: "https://i.imgur.com/5Vkgq9a.jpg",
          contributor: "Anthony"
        },
        {
          id: 2,
          title: "House",
          url: "https://i.imgur.com/WfWpNZE.jpg",
          contributor: "Anthony"
        },
        {
          id: 3,
          title: "Oliver",
          url: "https://i.imgur.com/RswoQZR.jpg",
          contributor: "Anthony"
        },
        {
          id: 4,
          title: "Pool",
          url: "https://i.imgur.com/MCXuaRn.jpg",
          contributor: "Anthony"
        },
        {
          id: 5,
          title: "Cat",
          url: "https://i.imgur.com/wlLqEVQ.jpg",
          contributor: "Anthony"
        },
        {
          id: 6,
          title: "Oliver",
          url: "https://i.imgur.com/tf8jwYQ.jpg",
          contributor: "Anthony"
        }
      ]);
    });
};
