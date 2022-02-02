const { Dislike } = require('../models');

const dislikeData = [
  {
    post_id: 1,
    count: 3
  },
  {
    post_id: 2,
    count: 6
  },
  {
    post_id: 3,
    count: 2
  },
  {
    post_id: 4,
    count: 8
  },
  {
    post_id: 5,
    count: 5
  },
  {
    post_id: 6,
    count: 5
  },
  {
    post_id: 7,
    count: 10
  },
  {
    post_id: 8,
    count: 5
  }
];

const seedDislikes = () => Dislike.bulkCreate(dislikeData);

module.exports = seedDislikes;