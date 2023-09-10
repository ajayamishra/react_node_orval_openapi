import mongoose, { Document, Model, Types } from 'mongoose'

interface UserAttributes {
  first_name: string
  last_name: string
  email: string
  mobile: string
  role: string
}

export interface UserDocument extends UserAttributes, Document {
  isPasswordMatched(password: string): Promise<boolean>
  _id: string
}

interface UserModel extends Model<UserDocument> {
  findOneByEmail(email: string): Promise<UserDocument | null>
}

const userSchema = new mongoose.Schema<UserDocument, UserModel>({
  first_name:{
      type: String,
      required: true,
  },
  last_name:{
    type: String,
    required: true
  },
  email:{
      type: String,
      required: true,
      unique: true
  },
  mobile:{
      type: String,
      required: true,
      unique: true
  },
  role: {
    type: String,
    default: 'user'
  }
},
{
  timestamps: true
});

export const User =  mongoose.model('User', userSchema)