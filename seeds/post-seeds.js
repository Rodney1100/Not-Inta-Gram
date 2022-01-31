const { Post } = require('../models');

const postdata = [
  {
    description: 'Donec posuere metus vitae ipsum.',
    image_url: 'https://cdn.mos.cms.futurecdn.net/kZVq5FcXAqUJ86i5CQ6dkB-970-80.jpg.webp',
    image_name: 'image1',
    user_id: 10
  },
  {
    description: 'Morbi non quam nec dui luctus rutrum.',
    image_url: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    image_name: 'image2',
    user_id: 8
  },
  {
    description: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    image_url: 'https://www.travelmanagers.com.au/wp-content/uploads/2012/08/AdobeStock_254529936_Railroad-to-Denali-National-Park-Alaska_750x500.jpg',
    image_name: 'image3',
    user_id: 1
  },
  {
    description: 'Nunc purus.',
    image_url: 'https://www.cbf.org/assets/images/1171-x-593-px/forest-stream-shenandoah-national-park-justin-black-iLCP-1171x593.jpg',
    image_name: 'image4',
    user_id: 4
  },
  {
    description: 'Pellentesque eget nunc.',
    image_url: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201809/GettyImages-481618375.jpeg?y0lei0czkjPdUlGhSwoZIEOp8sH3CYoV&size=770:433',
    image_name: 'image5',
    user_id: 7
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    image_url: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1351,w_2400,x_0,y_0/f_auto,q_auto,w_1100/v1571796144/shape/mentalfloss/604599-gettyimages-1083893950.jpg',
    image_name: 'image6',
    user_id: 4
  },
  {
    description: 'In hac habitasse platea dictumst.',
    image_url: 'https://ichef.bbci.co.uk/images/ic/1200x675/p049tgdb.jpg',
    image_name: 'image7',
    user_id: 1
  },
  {
    description: 'Morbi non quam nec dui luctus rutrum.',
    image_url: 'https://cdn.vox-cdn.com/thumbor/6S34LwI4uPFuoCwOSX365nfJf_0=/0x0:3504x2336/1400x1050/filters:focal(1236x1025:1796x1585):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65816344/pig_GettyImages_131967915.0.jpg',
    image_name: 'image8',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
