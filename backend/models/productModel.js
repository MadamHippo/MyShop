// this is all the scehema of the model:

import mongoose from 'mongoose';
//calling Mongodb to make us a new database that will support this product model.


// the reviews are very complex, unlike a name so we need to make a new Schema (which means definition.) So we will make a defintion of a review BUT tell mongo/mongoose to NOT make a separate table for Reviews. We will put reviews into Products. Which makes it an object inside an Object.


const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating : {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
})





const productSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  // user will now attached to this product. Ref means referencing table (which is Users table)

  // this column is populated with data from mongoose's schema's types object ID from the Ref table (reference table).

  // This is how you set up relationship between one collection to another collection.

  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0
  }
}, {
  timestamps: true
});

const Products = mongoose.model('Products', productSchema)
// based on the defition of product above we have defined this Schema to be called Products. Then we exported Products. Create the collection and build a mongoDB and made this exportable.
export default Products