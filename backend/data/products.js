// we're remnoving _id: because now mongodb will automatically worry and give us the id instead of us doing it. And their id won't just be #1 or #2, it's more sophiscated of an product id. 

// no user column here, it's in the seeder file/function. 

const products = [
  {
    name: 'Cinnamon',
    image: '/images/cinnamon.jpg',
    description:
      'Acrylic abstract collage with interesting visual combination of collage and bold forms.  Blue and grey with darker shapes of browns and black.  Collage of black dots and accents of white stripes, circles and other markings.',
    brand: 'Deanna Che Lyn',
    category: 'Acrylic',
    price: 259.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'Jalapeno Loco',
    image: '/images/jalapeno-loco.jpg',
    description:
      'Intaglio Abstract print on BFK Rives paper using chine colle and printmaking oil.  Red Black & White Art Print, Limited Edition Printmaking of total of 8.',
    brand: 'Deanna Che Lyn',
    category: 'Acrylic',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Samba Me',
    image: '/images/samba-me-1.jpg',
    description:
      'Gestural sumi-e black ink brush work originally on rice paper.  Lots of movement and interest. Image can be printed at any size 8"x8" and derivatives of this size.    Please contact the artist.',
    brand: 'Deanna Che Lyn',
    category: 'Acrylic',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: 'Slanted Writing',
    image: '/images/slanted-writing.jpg',
    description:
      'Contemporary abstract acrylic collage on paper.',
    brand: 'Deanna Che Lyn',
    category: 'Acrylic',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: 'Walnut Chips',
    image: '/images/walnut-chips.jpg',
    description:
      'Modern abstract on paper with minimalist colour. Interesting shapes with dark browns, greys, blues and yellows.',
    brand: 'Deanna Che Lyn',
    category: 'Acrylic',
    price: 549.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'Wildly Floral',
    image: '/images/wildly-floral.jpg',
    description:
      'Contemporary acrylic on paper with image that is highly gestural and lively strokes.  Beautiful colours and forms that could represent flora or a picturesque image.',
    brand: 'Deanna Che Lyn',
    category: 'Acrylic',
    price: 829.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
]

export default products
