import mongoose, { models, model, Schema } from "mongoose";

export interface IBook {
  _id?: mongoose.Types.ObjectId;
  bookId:string;
  title: string;
  author: string;
  category: string;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const bookSchema = new Schema<IBook>(
  {
    bookId : {
        type:String,
        required:[true,"Book id is not Assigned !"],
        unique:true
    },
    // stock:{
    //   type:Number,
    // },
    title: {
      type: String,
      required: [true, "Please Provide a username"],
      unique: true,
    },
    author: {
      type: String,
      required: [true, "Please Provide a email"],
      unique: true,
    },
    category: {
      type: String,
      required: [true, "Please Provide a email"],
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const Book = models?.books || model<IBook>("books", bookSchema);

export default Book;
