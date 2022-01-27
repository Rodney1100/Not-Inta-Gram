const { Post } = require('../models');

const postdata = [
  {
    description: 'Donec posuere metus vitae ipsum.',
    image_url: 'https://www.moddb.com/members/melanielove/images/random4',
    user_id: 10
  },
  {
    description: 'Morbi non quam nec dui luctus rutrum.',
    image_url: 'https://www.moddb.com/members/melanielove/images/random4',
    user_id: 8
  },
  {
    description: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    image_url: 'https://unsplash.com/s/photos/random-objects',
    user_id: 1
  },
  {
    description: 'Nunc purus.',
    image_url: 'https://pixabay.com/illustrations/cubes-assorted-boxes-colorful-677092/',
    user_id: 4
  },
  {
    description: 'Pellentesque eget nunc.',
    image_url: 'https://pixabay.com/illustrations/cube-dice-luck-random-numbers-1655118/',
    user_id: 7
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    image_url: 'https://pixabay.com/vectors/dice-red-two-game-rolling-chance-25637/',
    user_id: 4
  },
  {
    description: 'In hac habitasse platea dictumst.',
    image_url: 'https://pixabay.com/illustrations/colorful-rainbow-gradient-geometric-2174045/',
    user_id: 1
  },
  {
    description: 'Morbi non quam nec dui luctus rutrum.',
    image_url: 'https://pixabay.com/illustrations/mandalas-colorful-abstract-1084082/',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
