import mongoose from 'mongoose'



// building user schema (we don't need ID column that's automatically created for us)


// No need to create isAdmin for all of them because it defaults to false. If it's not required, it won't take extra space in the MongoDB (unless it's SQL or something like relationshipial databases work...like an excel file)


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
})

const Users = mongoose.model('Users', userSchema)
export default Users