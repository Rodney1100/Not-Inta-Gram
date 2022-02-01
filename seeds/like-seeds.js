const { Like } = require('../models');

const likedata = [
  {
    post_id: 1,
    count: 9
  },
  {
    post_id: 2,
    count: 1
  },
  {
    post_id: 3,
    count: 8
  },
  {
    post_id: 4,
    count: 2
  },
  {
    post_id: 5,
    count: 12
  },
];

const seedLikes = () => Like.bulkCreate(likedata);

module.exports = seedLikes;
