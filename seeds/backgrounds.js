exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex("backgrounds")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("backgrounds").insert([
        {
          id: 1,
          title: "Background 1",
          description: "Gallery wall",
          url: "https://i.imgur.com/9hD9lp5.jpg",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus. Massa sapien faucibus et molestie. Diam ut venenatis tellus in metus vulputate eu scelerisque. Sed viverra ipsum nunc aliquet. Cras ornare arcu dui vivamus arcu. Leo a diam sollicitudin tempor id. Purus sit amet luctus venenatis. Neque viverra justo nec ultrices dui. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Tristique risus nec feugiat in fermentum posuere urna. Faucibus a pellentesque sit amet porttitor eget dolor. Tempus urna et pharetra pharetra massa massa ultricies mi. Faucibus ornare suspendisse sed nisi. Nibh sed pulvinar proin gravida hendrerit lectus. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Libero enim sed faucibus turpis in eu mi bibendum neque. Nisl nisi scelerisque eu ultrices vitae. Proin fermentum leo vel orci porta non pulvinar. Amet risus nullam eget felis eget nunc lobortis mattis. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Vel orci porta non pulvinar. Ac orci phasellus egestas tellus rutrum. Nec dui nunc mattis enim ut.",
          contributor: "Anthony"
        },
        {
          id: 2,
          title: "Background 2",
          description: "Office wall",
          url: "https://i.imgur.com/AagTDTP.jpg",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus. Massa sapien faucibus et molestie. Diam ut venenatis tellus in metus vulputate eu scelerisque. Sed viverra ipsum nunc aliquet. Cras ornare arcu dui vivamus arcu. Leo a diam sollicitudin tempor id. Purus sit amet luctus venenatis. Neque viverra justo nec ultrices dui. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Tristique risus nec feugiat in fermentum posuere urna. Faucibus a pellentesque sit amet porttitor eget dolor. Tempus urna et pharetra pharetra massa massa ultricies mi. Faucibus ornare suspendisse sed nisi. Nibh sed pulvinar proin gravida hendrerit lectus. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Libero enim sed faucibus turpis in eu mi bibendum neque. Nisl nisi scelerisque eu ultrices vitae. Proin fermentum leo vel orci porta non pulvinar. Amet risus nullam eget felis eget nunc lobortis mattis. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Vel orci porta non pulvinar. Ac orci phasellus egestas tellus rutrum. Nec dui nunc mattis enim ut.",
          contributor: "Anthony"
        },
        {
          id: 3,
          title: "Background 3",
          description: "Bedroom wall.",
          url: "https://i.imgur.com/J9RSTHX.jpg",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus. Massa sapien faucibus et molestie. Diam ut venenatis tellus in metus vulputate eu scelerisque. Sed viverra ipsum nunc aliquet. Cras ornare arcu dui vivamus arcu. Leo a diam sollicitudin tempor id. Purus sit amet luctus venenatis. Neque viverra justo nec ultrices dui. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Tristique risus nec feugiat in fermentum posuere urna. Faucibus a pellentesque sit amet porttitor eget dolor. Tempus urna et pharetra pharetra massa massa ultricies mi. Faucibus ornare suspendisse sed nisi. Nibh sed pulvinar proin gravida hendrerit lectus. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Libero enim sed faucibus turpis in eu mi bibendum neque. Nisl nisi scelerisque eu ultrices vitae. Proin fermentum leo vel orci porta non pulvinar. Amet risus nullam eget felis eget nunc lobortis mattis. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Vel orci porta non pulvinar. Ac orci phasellus egestas tellus rutrum. Nec dui nunc mattis enim ut.",
          contributor: "Anthony"
        },
        {
          id: 4,
          title: "Background 4",
          description: "Pink wall.",
          url: "https://i.imgur.com/svZqZVq.jpg",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus. Massa sapien faucibus et molestie. Diam ut venenatis tellus in metus vulputate eu scelerisque. Sed viverra ipsum nunc aliquet. Cras ornare arcu dui vivamus arcu. Leo a diam sollicitudin tempor id. Purus sit amet luctus venenatis. Neque viverra justo nec ultrices dui. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Tristique risus nec feugiat in fermentum posuere urna. Faucibus a pellentesque sit amet porttitor eget dolor. Tempus urna et pharetra pharetra massa massa ultricies mi. Faucibus ornare suspendisse sed nisi. Nibh sed pulvinar proin gravida hendrerit lectus. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Libero enim sed faucibus turpis in eu mi bibendum neque. Nisl nisi scelerisque eu ultrices vitae. Proin fermentum leo vel orci porta non pulvinar. Amet risus nullam eget felis eget nunc lobortis mattis. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Vel orci porta non pulvinar. Ac orci phasellus egestas tellus rutrum. Nec dui nunc mattis enim ut.",
          contributor: "Anthony"
        }
      ]);
    });
};
